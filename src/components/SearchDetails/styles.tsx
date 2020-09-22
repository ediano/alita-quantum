import styled, { css } from 'styled-components';

export const Error = styled.div`
  display: block;
  font-weight: 600;
  text-align: center;
`;

export const Form = styled.form`
  width: 90%;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  border: 1px solid var(--grey);
  height: 54px;
  width: 70%;
  font-size: 1.2rem;
  border-radius: 4px;
  padding: 10px;
`;

export const Btn = styled.div`
  display: inline-block;
`;

export const Button = styled.button`
  cursor: pointer;
  display: inline-block;
  background: var(--primary);
  color: var(--txt);
  border: 1px solid var(--grey);
  height: 54px;
  font-size: 1.2rem;
  border-radius: 4px;
  padding: 10px;
`;

export const Section = styled.section`
  width: 100%;
`;

export const Capsule = styled.span`
  padding: 10px;
  font-weight: 600;
  font-size: 1.4rem;
  border-bottom: 1px solid var(--grey);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--grey);
  margin-bottom: 30px;
  border-radius: 4px;
`;

export const Item = styled.div`
  padding: 5px 15px;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  align-items: center;
`;

export const Details = styled.div`
  padding: 5px;
`;

export const Action = styled.div`
  padding: 5px;
  font-weight: 600;
`;

export const Progress = styled.div`
  display: block;
  height: 15px;
  width: 100%;
  border-radius: 5px;
  margin: 10px 0;

  ${(props) =>
    props.className === 'waiting' &&
    css`
      border: 5px solid #ffff00;
    `}

  ${(props) =>
    props.className === 'confirming' &&
    css`
      border: 5px solid var(--confirm);
    `}

  ${(props) =>
    props.className === 'exchanging' &&
    css`
      border: 5px solid var(--confirm);
    `}

  ${(props) =>
    props.className === 'sending' &&
    css`
      border: 5px solid var(--confirm);
    `}

  ${(props) =>
    props.className === 'finished' &&
    css`
      border: 5px solid var(--confirm);
    `}

  ${(props) =>
    props.className === 'failed' &&
    css`
      border: 5px solid var(--alert);
    `}

  ${(props) =>
    props.className === 'expired' &&
    css`
      border: 5px solid var(--alert);
    `}
`;

export const ProgressContent = styled.span`
  height: 100%;
  display: block;

  ${(props) =>
    props.className === 'waiting' &&
    css`
      background: #ffff00;
      width: 1%;
    `}
  ${(props) =>
    props.className === 'confirming' &&
    css`
      background: var(--confirm);
      width: 25%;
    `}
    ${(props) =>
    props.className === 'exchanging' &&
    css`
      background: var(--confirm);
      width: 40%;
    `}
    ${(props) =>
    props.className === 'sending' &&
    css`
      background: var(--confirm);
      width: 60%;
    `}
    ${(props) =>
    props.className === 'finished' &&
    css`
      background: var(--confirm);
      width: 100%;
    `}
    ${(props) =>
    props.className === 'failed' &&
    css`
      background: var(--alert);
      width: 100%;
    `}
    ${(props) =>
    props.className === 'expired' &&
    css`
      background: var(--alert);
      width: 100%;
    `};
`;
