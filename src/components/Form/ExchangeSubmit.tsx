import React from 'react';
import { useExchangeContext } from '../../contexts/ExchangeContext';

import ListCoinValue from '../ListCoinValue';
import CreateTransaction from '../CreateTransaction';
import ConfirmTransaction from '../ConfirmTransaction';

import * as S from './styles';

const ExchangeSubmit: React.FC = () => {
  const { handlaSubmit, handlaClick } = useExchangeContext();

  return (
    <S.Form onSubmit={handlaSubmit} className="exchange">
      <ListCoinValue page="exchange" />
      <CreateTransaction />

      <S.ButtonDiv>
        <S.Button type="button" onClick={handlaClick}>
          Trocar agora
        </S.Button>
      </S.ButtonDiv>

      <ConfirmTransaction />
    </S.Form>
  );
};

export default ExchangeSubmit;
