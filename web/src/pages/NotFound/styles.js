import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 15px 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Head = styled.div`
  padding: 35px 25px;
  display: flex;
  flex-direction: row;
  width: 100%;

  align-items: flex-start;
  justify-content: flex-start;

  span {
    color: black;
  }
`;

export const Text1 = styled.span`
  font-size: 40px;
  font-family: Monaco, Inconsolata, Roboto, sans-serif;
`;

export const Text2 = styled.span`
  font-size: 40px;
  font-family: Raleway, Roboto, sans-serif;
  font-weight: 200;
  font-style: italic;
`;

export const Input = styled.input`
  width: 40%;
  height: 30px;
  margin-left: 100px;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid lightgray;
  font-size: 20px;
  font-family: Raleway, Roboto, sans-serif;
  font-weight: 300;
  color: #5c5c5c;
`;

export const Button = styled.button`
  width: 4%;
  height: 50px;
  border-radius: 4px;
  border: 0;
  background-color: #ac53f2;
  transition: background 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${darken(0.2, '#ac53f2')};
  }
`;

export const Message = styled.span`
  color: #ac53f2;
  font-size: 40px;

  font-family: Raleway, Roboto, sans-serif;
  font-weight: 300;
  margin-top: 100px;
`;
