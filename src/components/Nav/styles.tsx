import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
  size: number;
}

export const Nav = styled.nav`
  min-height: 64px;
  padding: 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--grey);
`;

export const Logo = styled.div``;

export const LogoLink = styled(Link)`
  color: var(--txt);
  font-size: 1.6rem;
  font-weight: 600;
`;

export const LogoContainer = styled.div``;

export const Ul = styled.ul`
  @media (min-width: ${(props: Props) => props.size + 1}px) {
    display: flex;
    align-items: center;
  }

  @media (max-width: ${(props: Props) => props.size}px) {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 250px;
    height: 100%;
    background: #fff;
    transition: 0.5s;
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.5);
    transform: translateX(-105%);

    display: flex;
    flex-direction: column;

    ${(props) =>
      props.className &&
      css`
        transform: translateX(0%);
      `}
  }
`;

export const Li = styled.li`
  list-style: none;
  padding-left: 15px;
`;

export const A = styled(Link)`
  font-weight: 600;
  color: var(--txt);
  display: block;

  &:hover {
    color: var(--secondary);
  }

  @media (max-width: ${(props: Props) => props.size}px) {
    color: var(--primary);
    padding: 15px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 0 15px;
  background: transparent;
  color: #fff;
`;
