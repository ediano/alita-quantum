import styled, { css } from 'styled-components';

import teia from '../../image/map.svg';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.25);

  ${(props) =>
    props.theme === 'home' &&
    css`
      background: var(--primary);
      background-image: url(${teia});
      min-height: 75vh;
    `}

  ${(props) =>
    props.theme !== 'home' &&
    css`
      nav {
        background: var(--primary);
      }
    `}
`;

export const Description = styled.div``;

export const DescriptionContainer = styled.div``;
