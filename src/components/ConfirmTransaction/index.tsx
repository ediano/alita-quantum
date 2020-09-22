import React from 'react';
import { useListCoinValueContext } from '../../contexts/ListCoinValueContext';
import { useExchangeContext } from '../../contexts/ExchangeContext';

import Err from './filterErrors';

import Spinner from '../Spinner';
import * as S from './styles';

const ConfirmTransaction: React.FC = () => {
  const { flow, estimatedAmount, minAmount } = useListCoinValueContext();
  const {
    confirmTransaction,
    payoutAddress,
    extraId,
    handlaClick,
    error,
    spinner,
  } = useExchangeContext();

  return (
    <>
      {confirmTransaction && (
        <>
          <S.Section>
            <S.ContentSection>
              {error === 'not_valid_address' && (
                <Err err={error} one={payoutAddress} tow={flow.to} />
              )}

              {error === 'out_of_range' && (
                <Err err={error} one={String(minAmount)} tow={flow.to} />
              )}

              {error === 'not_valid_extra_id' && (
                <Err err={error} one={extraId} tow={flow.to} />
              )}

              {spinner && <Spinner />}
              <S.ContentDiv>
                <S.DivContent>
                  <S.SpanTitle>Você está enviando</S.SpanTitle>

                  <S.SpanFromTo>
                    {flow.amount} - {flow.from}
                  </S.SpanFromTo>
                </S.DivContent>

                <S.DivContent>
                  <S.SpanTitle>Você vai receber</S.SpanTitle>

                  <S.SpanFromTo>
                    {estimatedAmount} - {flow.to}
                  </S.SpanFromTo>

                  <S.SpanAlert>Aproximadamente</S.SpanAlert>
                </S.DivContent>
              </S.ContentDiv>

              <S.Address>
                <S.SpanAddress>
                  <S.SpanTitle>Endereço:</S.SpanTitle> {payoutAddress}
                </S.SpanAddress>

                {extraId && (
                  <S.SpanId>
                    <S.SpanTitle>ID/TAG/MEMO:</S.SpanTitle> {extraId}
                  </S.SpanId>
                )}
              </S.Address>

              <S.ButtonDiv>
                <S.Confirm>Confirmar</S.Confirm>

                <S.Cancel type="button" onClick={handlaClick}>
                  Cancelar
                </S.Cancel>
              </S.ButtonDiv>
            </S.ContentSection>
          </S.Section>
        </>
      )}
    </>
  );
};

export default ConfirmTransaction;
