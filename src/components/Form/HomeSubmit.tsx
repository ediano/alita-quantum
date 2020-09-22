import React from 'react';
import { useListCoinValueContext } from '../../contexts/ListCoinValueContext';

import ListCoinValue from '../ListCoinValue';

import * as S from './styles';

const HomeSubmit: React.FC = () => {
  const { handlaSubmit } = useListCoinValueContext();

  return (
    <S.Form onSubmit={handlaSubmit} className="home">
      <ListCoinValue page="home" />
      <S.ButtonDiv>
        <S.Button type="submit">Trocar agora</S.Button>
      </S.ButtonDiv>
    </S.Form>
  );
};

export default HomeSubmit;
