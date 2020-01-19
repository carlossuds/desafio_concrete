import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { MdSearch } from 'react-icons/md';

import api from '../../services/api';
import history from '../../services/history';

import {
  Container,
  Head,
  Text1,
  Text2,
  Input,
  Button,
  Message,
} from './styles';

export default function NotFound({ location }) {
  const [user, setUser] = useState('');

  useEffect(() => {
    setUser(location.state.user.login);
  }, [location.state.user.login]);

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
        <Message>User not found :(</Message>
      </Container>
    </>
  );
}
