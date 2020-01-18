import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleDiv = styled.div`
  margin-top: 130px;
  display: flex;
  flex-direction: row;
  align-items: center;

  justify-content: center;
`;

export const Text1 = styled.span`
  font-size: 60px;
  font-family: Monaco, Inconsolata, Roboto, sans-serif;
`;

export const Text2 = styled.span`
  font-size: 60px;
  font-family: Raleway, Roboto, sans-serif;
  font-weight: 200;
  font-style: italic;
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 20px;

  align-items: flex-start;
  justify-content: center;
`;

export const Input = styled.input`
  width: 40%;
  height: 30px;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid lightgray;
  font-size: 30px;
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
  cursor: pointer;
`;
