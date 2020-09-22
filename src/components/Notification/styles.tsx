import styled from 'styled-components';

export const Section = styled.section`
  width: 80%;
  max-width: 1200px;
  margin: 50px auto;
`;

export const Paragraph = styled.p`
  display: block;
  margin-bottom: 25px;
  font-size: 1.2rem;
`;

export const TxtLink = styled.a`
  color: var(--secondary);
  font-weight: 600;
  border-bottom: 1px solid var(--secondary);
`;

export const BtcContent = styled.div`
  display: block;
  margin: 50px auto 0 auto;
  text-align: center;
`;

export const Link = styled.a`
  display: inline-block;
  font-size: 1.2rem;
  padding: 20px;
  color: var(--txt);
  background: var(--alert);
  border-radius: 4px;

  &:hover {
    background: rgba(215, 58, 73, 0.75);
  }
`;
