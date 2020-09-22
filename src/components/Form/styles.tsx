import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  color: ${(props) =>
    props.className === 'home' ? 'var(--txt)' : 'var(--primary)'};
`;

export const ButtonDiv = styled.div`
  text-align: center;
`;

export const Button = styled.button`
  cursor: pointer;
  background: var(--confirm);
  color: var(--txt);
  font-weight: 600;
  padding: 10px;
  font-size: 1.4rem;
  border-radius: 4px;
  margin-top: 30px;
`;
