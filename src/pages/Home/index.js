import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import api from '../../services/api';
import history from '../../services/history';

import {
  Container,
  TitleDiv,
  Text1,
  Text2,
  InputForm,
  Input,
  Button,
} from './styles';

export default function Home() {
  const [user, setUser] = useState('');

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
    <Container>
      <TitleDiv>
        <Text1>Github</Text1>
        <Text2>Search</Text2>
      </TitleDiv>
      <InputForm onSubmit={handleClick}>
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
    </Container>
  );
}
