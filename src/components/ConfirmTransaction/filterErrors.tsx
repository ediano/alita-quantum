import React from 'react';

import * as S from './styles';

interface ErrProps {
  err: string;
  one: string;
  tow: string;
}

const Err: React.FC<ErrProps> = ({ err, one, tow }) => {
  if (err === 'not_valid_address') {
    return (
      <S.ErrContent>
        <S.ErrSpanWeight>{one}</S.ErrSpanWeight> não é um endereço{' '}
        <S.ErrSpan>{tow}</S.ErrSpan> válido.
      </S.ErrContent>
    );
  }

  if (err === 'out_of_range') {
    return (
      <S.ErrContent>
        Montante é inferior ao mínimo:{' '}
        <S.ErrSpan>
          {one} {tow}.
        </S.ErrSpan>
      </S.ErrContent>
    );
  }

  if (err === 'not_valid_extra_id') {
    return (
      <S.ErrContent>
        <S.ErrSpanWeight>{one}</S.ErrSpanWeight>: Não é um ID extra válido de{' '}
        <S.ErrSpan>{tow}</S.ErrSpan>.
      </S.ErrContent>
    );
  }

  return <></>;
};

export default Err;
