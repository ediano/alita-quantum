import styled, { css } from 'styled-components';
import { QRCode } from 'react-qr-svg';

export const Span = styled.span`
  text-transform: uppercase;
`;

export const TxtWeight = styled.span`
  font-weight: 600;
  display: block;
`;

export const SectionPayout = styled.section`
  display: flex;
  flex-direction: row;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const ContentPayout = styled.div`
  text-align: center;
  width: 50%;
  flex: 1 0 50%;
  padding: 10px;

  @media (max-width: 700px) {
    width: 100%;
    flex: 1 0 100%;
  }
`;

export const Payout = styled.div`
  border-radius: 4px;
  padding: 10px;
  font-size: 1.2rem;
  border: ${(props) =>
    props.className === 'to'
      ? css`1px solid var(--confirm)`
      : css`1px solid var(--hover)`};
`;

export const SectionPayin = styled.section`
  margin: 10px;
`;

export const Payin = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 10px;
  align-items: center;
  border-radius: 4px;
  font-size: 1.2rem;
  border: 1px solid var(--hover);
  margin: 10px 0;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const PayinContent = styled.div`
  width: 75%;
  padding: 10px;
  flex: 1;

  @media (max-width: 700px) {
    width: 100%;
  }

  @media (min-width: 701px) {
    margin-right: 25px;
  }
`;

export const AddressId = styled.div`
  overflow-x: auto;
  padding-bottom: 10px;
  margin-top: 10px;
  padding: 10px;
  background: var(--hover);
  color: var(--txt);
  border-radius: 4px;
`;

export const Alert = styled.span`
  font-size: 0.9rem;
  color: var(--alert);
`;

export const QrCode = styled(QRCode)`
  max-width: 150px;
  width: 100%;
  height: auto;
`;

export const StatusContent = styled.section`
  margin: 30px 0;
  display: block;
`;

export const Status = styled.div`
  display: block;
  font-weight: 600;
  text-align: right;
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
