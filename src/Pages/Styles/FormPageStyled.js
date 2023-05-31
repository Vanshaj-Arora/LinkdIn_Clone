import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  /* Example styles */
  width: 300px;
`;

export const PrimaryBtn = styled.button`
  padding: 10px 20px;
  background-color: #2196f3;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  /* Example hover effect */
  &:hover {
    background-color: #0d8ae3;
  }
`;

export const SecondaryBtn = styled.button`
  padding: 10px 20px;
  background-color: #f5f5f5;
  color: #333;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  /* Example hover effect */
  &:hover {
    background-color: #e1e1e1;
  }
`;
