import React from 'react';
import { BsArrowUpDown as Ico } from 'react-icons/bs';
import { useListCoinValueContext } from '../../contexts/ListCoinValueContext';

import * as S from './styles';

interface Props {
  page?: string;
}

const ListCoinValue: React.FC<Props> = ({ page }) => {
  const {
    coins,
    minAmount,
    estimatedAmount,
    flow,
    handlaSendValue,
    handlaSelectedCoin,
    handlaExchange,
    sendAmount,
  } = useListCoinValueContext();

  return (
    <>
      <S.Fieldset>
        <S.Legend theme={page}>Envia</S.Legend>
        <S.FieldGroup>
          <S.Field>
            <S.Input
              type="text"
              name="amount"
              id="amount"
              onChange={handlaSendValue}
              value={sendAmount}
              defaultValue={Number(flow.amount) ? flow.amount : undefined}
            />
            <S.Select
              name="from"
              id="from"
              value={flow.from}
              onChange={handlaSelectedCoin}
            >
              {coins.map((item) => (
                <S.Option key={item.ticker} value={item.ticker}>
                  {item.name}
                </S.Option>
              ))}
            </S.Select>
          </S.Field>
          <S.Label htmlFor="send">
            {minAmount > Number(flow.amount)
              ? `Montante mínimo de envio: ${minAmount}`
              : ''}
          </S.Label>
        </S.FieldGroup>
      </S.Fieldset>

      <S.Div>
        <S.IcoButton theme={page} type="button" onClick={handlaExchange}>
          <Ico size={50} />
        </S.IcoButton>
      </S.Div>

      <S.Fieldset>
        <S.Legend theme={page}>Recebe</S.Legend>
        <S.FieldGroup>
          <S.Field>
            <S.Input
              type="text"
              name="receive_amount"
              id="receive_amount"
              value={Number(flow.amount) >= minAmount ? estimatedAmount : 0}
              disabled
            />
            <S.Select
              name="to"
              id="to"
              value={flow.to}
              onChange={handlaSelectedCoin}
            >
              {coins.map((item) => (
                <S.Option key={item.ticker} value={item.ticker}>
                  {item.name}
                </S.Option>
              ))}
            </S.Select>
          </S.Field>
          <S.Label htmlFor="receive">Montante esperado aproximado</S.Label>
        </S.FieldGroup>
      </S.Fieldset>
    </>
  );
};

export default ListCoinValue;
