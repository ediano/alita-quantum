import React from 'react';

import Nav from '../Nav';

import * as S from './styles';

interface Props {
  page?: string;
}

const Header: React.FC<Props> = ({ page, children }) => (
  <S.Header theme={page}>
    <Nav />
    {children}
  </S.Header>
);

export default Header;
