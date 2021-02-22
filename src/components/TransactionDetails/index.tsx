import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Props, Status, NameCoin } from './types';

import { useListCoinValueContext } from '../../contexts/ListCoinValueContext';

import Spinner from '../Spinner';

import * as S from './styles';

const TransactionDetails: React.FC<Props> = ({ id }) => {
  const { coins } = useListCoinValueContext();
  const [status, setStatus] = useState<Status>({} as Status);
  const [nameCoin, setNameCoin] = useState<NameCoin>({} as NameCoin);

  useEffect(() => {
    axios
      .get<Status>(
        `https://changenow.io/api/v1/transactions/${id}/aff84c5fd0db837bbdae3ba3fca803648744a86b0997cdc6b4301e9c3130dc44`,
      )
      .then((response) => {
        setStatus(response.data);
      });
  }, [id, status]);

  useEffect(() => {
    const from = coins.filter(
      (coin) => coin.ticker === status.fromCurrency && coin.name,
    );

    const to = coins.filter(
      (coin) => coin.ticker === status.toCurrency && coin.name,
    );

    from[0]?.name &&
      to[0]?.name &&
      setNameCoin({ from: from[0].name, to: to[0].name });
  }, [coins, status]);

  return (
    <>
      {status.id ? (
        <>
          <S.SectionPayout>
            <S.ContentPayout>
              <S.Payout>
                <S.TxtWeight>Você está enviado</S.TxtWeight>
                <S.Span>
                  {status.expectedSendAmount} {nameCoin?.from}
                </S.Span>
              </S.Payout>
            </S.ContentPayout>

            <S.ContentPayout>
              <S.Payout className="to">
                <S.TxtWeight>Você vai receber</S.TxtWeight>
                <S.Span>
                  {status.expectedReceiveAmount} {nameCoin?.to}
                </S.Span>
              </S.Payout>
            </S.ContentPayout>
          </S.SectionPayout>

          <S.StatusContent>
            Caso queira acompanhar o progresso da transação continue nesta
            página.
            {status.status === 'waiting' && <S.Status>Aguardando</S.Status>}
            {status.status === 'confirming' && <S.Status>Confirmado</S.Status>}
            {status.status === 'exchanging' && <S.Status>Trocando</S.Status>}
            {status.status === 'sending' && <S.Status>Enviando</S.Status>}
            {status.status === 'finished' && <S.Status>Finalizado</S.Status>}
            {status.status === 'failed' && <S.Status>Falha</S.Status>}
            {status.status === 'expired' && <S.Status>Expirado</S.Status>}
            <S.Progress className={status.status}>
              <S.ProgressContent className={status.status} />
            </S.Progress>
          </S.StatusContent>

          <S.SectionPayin>
            <S.Payin>
              <S.PayinContent>
                <S.TxtWeight>
                  Envie seus <S.Span>{status.fromCurrency}</S.Span> para o
                  enreço abaixo
                </S.TxtWeight>

                <S.AddressId>{status.payinAddress}</S.AddressId>
              </S.PayinContent>

              <S.QrCode value={status.payinAddress} />
            </S.Payin>

            {status.payinExtraId && (
              <S.Payin>
                <S.PayinContent>
                  <S.TxtWeight>
                    ID/TAG/MEMO
                    <S.AddressId>{status.payinExtraId}</S.AddressId>
                  </S.TxtWeight>

                  <S.Alert>
                    Obrigatório: Para que a transação seja bem sucedida, você
                    deverá informar o nosso ID Extra no ato da transferência.
                  </S.Alert>
                </S.PayinContent>

                <S.QrCode value={status.payinExtraId} />
              </S.Payin>
            )}
          </S.SectionPayin>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default TransactionDetails;
