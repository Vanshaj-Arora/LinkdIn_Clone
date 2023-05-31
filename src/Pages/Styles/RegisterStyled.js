import styled from 'styled-components';

export const LinkBtn = styled.button`
  padding: 10px 20px;
  background-color: #fff;
  color: #2196f3;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  /* Example hover effect */
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const GoogleBtn = styled.button`
  padding: 10px 20px;
  background-color: #db4437;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  /* Example hover effect */
  &:hover {
    background-color: #c0362c;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin: 20px 0;
`;
