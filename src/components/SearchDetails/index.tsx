import React, {
  useState,
  useCallback,
  useEffect,
  FormEvent,
  ChangeEvent,
} from 'react';
import { useHistory } from 'react-router-dom';
import { parseISO, format } from 'date-fns';
import { Status, Props, NameCoin, Date } from './type';
import api from '../../services/api';

import { useListCoinValueContext } from '../../contexts/ListCoinValueContext';

import Spinner from '../Spinner';

import * as S from './styles';

const SearchDetails: React.FC<Props> = ({ id }) => {
  const history = useHistory();
  const { coins } = useListCoinValueContext();
  const [status, setStatus] = useState<Status>({} as Status);
  const [nameCoin, setNameCoin] = useState<NameCoin>({} as NameCoin);
  const [idState, setIdState] = useState('');
  const [spinner, setSpinner] = useState(false);
  const [date, setDate] = useState<Date>({} as Date);
  const [err, setErr] = useState('');

  useEffect(() => {
    if (id) {
      api
        .get<Status>(`/transactions/${id}/${process.env.REACT_APP_API_KEY}`)
        .then((response) => {
          setStatus(response.data);
        })
        .catch((error) => {
          setErr(error.response.data);
        });
    }
  }, [id, status]);

  useEffect(() => {
    const from = coins.filter(
      (coin) => coin.ticker === status.fromCurrency && coin.name
    );

    const to = coins.filter(
      (coin) => coin.ticker === status.toCurrency && coin.name
    );

    if (status.id === id && from[0]?.name && to[0]?.name) {
      setErr('');
      setSpinner(false);
      setNameCoin({ from: from[0].name, to: to[0].name });

      const createdAt = parseISO(status.createdAt);
      const updatedAt = parseISO(status.updatedAt);
      const depositReceivedAt = parseISO(status.depositReceivedAt);

      const created =
        status.createdAt && format(createdAt, "dd'/'MM'/'yyyy', às ' HH:mm'h'");

      const updated =
        status.updatedAt && format(updatedAt, "dd'/'MM'/'yyyy', às ' HH:mm'h'");

      const deposit =
        status.depositReceivedAt &&
        format(depositReceivedAt, "dd'/'MM'/'yyyy', às ' HH:mm'h'");

      setDate({
        created,
        updated,
        deposit,
      });
    }

    if (err !== '') {
      setSpinner(false);
    }
  }, [coins, status, err, id]);

  const handleInput = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setIdState(value);
  }, []);

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      if (idState) {
        setSpinner(true);
        history.push(`/search/${idState}`);
      }
    },
    [history, idState]
  );

  return (
    <>
      <S.Form onSubmit={handleSubmit}>
        <S.Input
          onChange={handleInput}
          placeholder="Digite o ID da transação"
        />

        <S.Btn>
          <S.Button>Buscar</S.Button>
        </S.Btn>
      </S.Form>

      {spinner && <Spinner />}

      {err !== '' && (
        <S.Error>Lamentamos, o ID informado não é existe.</S.Error>
      )}

      {status.id && err === '' && (
        <>
          <S.Progress className={status.status}>
            <S.ProgressContent className={status.status} />
          </S.Progress>

          <S.Section>
            <S.Content className={status.status}>
              <S.Capsule>
                Status | {status.status === 'waiting' && 'Aguardando'}
                {status.status === 'confirming' && 'Confirmado'}
                {status.status === 'exchanging' && 'Trocando'}
                {status.status === 'sending' && 'Enviando'}
                {status.status === 'finished' && 'Finalizado'}
                {status.status === 'failed' && 'Falha'}
                {status.status === 'expired' && 'Expirado'}
              </S.Capsule>

              {date.created && (
                <S.Item>
                  <S.Action>Criado em</S.Action>
                  <S.Details>{date.created}</S.Details>
                </S.Item>
              )}

              {date.deposit && (
                <S.Item>
                  <S.Action>Depositado em</S.Action>
                  <S.Details>{date.deposit}</S.Details>
                </S.Item>
              )}

              {date.updated && (
                <S.Item>
                  <S.Action>Atualizado em</S.Action>
                  <S.Details>{date.updated}</S.Details>
                </S.Item>
              )}
            </S.Content>

            <S.Content className={status.status}>
              <S.Capsule>Montante</S.Capsule>
              <S.Item>
                <S.Action>Enviado</S.Action>
                <S.Details>
                  {status.amountSend
                    ? status.amountSend
                    : status.expectedSendAmount}{' '}
                  {nameCoin.from}
                </S.Details>
              </S.Item>

              <S.Item>
                <S.Action>Recebido</S.Action>
                <S.Details>
                  {status.expectedReceiveAmount} {nameCoin.to}
                </S.Details>
              </S.Item>
            </S.Content>

            <S.Content className={status.status}>
              <S.Capsule>Carteira</S.Capsule>
              <S.Item>
                <S.Action>{nameCoin.to}</S.Action>
                <S.Details>{status.payoutAddress}</S.Details>
              </S.Item>

              {status.payoutExtraId && (
                <S.Item>
                  <S.Action>ID</S.Action>
                  <S.Details>{status.payoutExtraId}</S.Details>
                </S.Item>
              )}
            </S.Content>
          </S.Section>
        </>
      )}
    </>
  );
};

export default SearchDetails;
