import React from 'react';

import { site } from '../../config/site';

import * as S from './styles';

const Footer: React.FC = () => (
  <S.Footer>
    <S.Content>
      <S.ALink to="/">{site.title}</S.ALink>
      <S.Text>{site.description}</S.Text>
    </S.Content>
  </S.Footer>
);

export default Footer;
