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
  InputForm,
  Input,
  Button,
  Message,
} from './styles';

export default function NotFound({ location }) {
  const [user, setUser] = useState('');

  useEffect(() => {
    setUser(location.state.user.login);
  }, [location.state.user.login]);

  async function handleClick(e) {
    e.preventDefault();

    try {
      const responseUser = await api.get(`/users/${user}`);

      const responseRepos = await api.get(`/users/${user}/repos`);

      history.push({
        pathname: `/result/${user}`,
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
        <InputForm style={{ flex: 1 }} onSubmit={handleClick}>
          <Input
            data-testid="input"
            type="text"
            value={user}
            onChange={e => setUser(e.target.value)}
          />
          <Button data-testid="button" type="submit" onClick={handleClick}>
            <MdSearch color="white" size={30} style={{ marginTop: 5 }} />
          </Button>
        </InputForm>
      </Head>
      <Container>
        <Message>User not found :(</Message>
      </Container>
    </>
  );
}
