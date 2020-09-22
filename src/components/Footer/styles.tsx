import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Footer = styled.footer`
  background: var(--primary);
  padding: 50px 0;
`;

export const Content = styled.div`
  width: 1200px;
  max-width: 80%;
  margin: 0 auto;
  text-align: center;
`;

export const ALink = styled(Link)`
  color: var(--txt);
  font-size: 1.4rem;
  font-weight: 600;

  &:hover {
    color: var(--secondary);
  }
`;

export const Text = styled.p`
  padding-top: 10px;
  color: var(--txt);
`;
