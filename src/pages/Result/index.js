import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  MdSearch,
  MdLocationOn,
  MdStarBorder,
  MdGroupWork,
} from 'react-icons/md';
import { FiBox } from 'react-icons/fi';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';

import api from '../../services/api';
import history from '../../services/history';

import {
  Container,
  Head,
  Text1,
  Text2,
  Input,
  Button,
  Profile,
  Avatar,
  Name,
  ProfileText,
  RepoList,
  RepoItem,
} from './styles';

export default function Result({ location }) {
  const [user, setUser] = useState('');
  const [repos, setRepos] = useState([]);
  const [stars, setStars] = useState(0);

  useEffect(() => {
    setRepos(location.state.repos);
    let count = 0;
    // eslint-disable-next-line array-callback-return
    repos.map(repo => {
      count += repo.stargazers_count;
    });
    setStars(count);
    setUser(location.state.user.login);
  }, [location.state.repos, location.state.user.login, repos]);

  async function handleClick() {
    try {
      const responseUser = await api.get(`/users/${user}`);

      const responseRepos = await api.get(`/users/${user}/repos`);

      history.push({
        pathname: '/result',
        state: {
          user: responseUser.data,
          repos: responseRepos.data,
        }, // your data array of objects
      });
    } catch (err) {
      history.push({
        pathname: '/notfound',
        state: {
          user: { login: user },
        },
      });
    }
  }

  return (
    <>
      <Head>
        <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
          <Text1>Github</Text1>
          <Text2>Search</Text2>
        </Link>

        <Input
          data-testid="input"
          type="text"
          value={user}
          onChange={e => setUser(e.target.value)}
        />
        <Button data-testid="button" onClick={handleClick}>
          <MdSearch color="white" size={30} style={{ marginTop: 5 }} />
        </Button>
      </Head>
      <Container>
        <Profile>
          <Avatar src={location.state.user.avatar_url} />
          <Name>{location.state.user.name}</Name>
          <ProfileText>{location.state.user.login}</ProfileText>
          <p />
          <ProfileText>
            <MdGroupWork size={30} />
            {location.state.user.company}
          </ProfileText>
          <ProfileText>
            <MdLocationOn size={30} />
            {location.state.user.location}
          </ProfileText>
          <ProfileText>
            <MdStarBorder size={30} />
            {stars}
          </ProfileText>
          <ProfileText>
            <FiBox size={30} />
            {location.state.user.public_repos}
          </ProfileText>
          <ProfileText>
            <AiOutlineUsergroupAdd size={30} />
            {location.state.user.followers}
          </ProfileText>
        </Profile>

        <RepoList>
          <ul>
            {repos
              .sort((a, b) => b.stargazers_count - a.stargazers_count)
              .map(repo => (
                <RepoItem key={repo.id}>
                  <a href={repo.html_url}>
                    <Name style={{ color: '#ac53f2' }}>{repo.name}</Name>
                  </a>
                  <ProfileText style={{ color: '#000000' }}>
                    {repo.description}
                  </ProfileText>
                  <ProfileText style={{ marginTop: 10 }}>
                    <MdStarBorder size={30} />
                    {repo.stargazers_count}
                  </ProfileText>
                </RepoItem>
              ))}
          </ul>
        </RepoList>
      </Container>
    </>
  );
}
