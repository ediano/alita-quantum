import React from 'react';
import { useListCoinValueContext } from '../../contexts/ListCoinValueContext';
import { useExchangeContext } from '../../contexts/ExchangeContext';

import * as S from './styles';

const ConfirmTransaction: React.FC = () => {
  const { flow, idExternal } = useListCoinValueContext();
  const {
    payoutAddress,
    extraId,
    handlaPayoutAddress,
    handlaExtraId,
  } = useExchangeContext();

  return (
    <S.Fieldset>
      <S.Legend>
        Dados da sua carteira <S.Obj>{flow.to}</S.Obj>
      </S.Legend>
      <S.FieldGroup>
        <S.Field>
          <S.Label htmlFor="address">Seu endereço {flow.to}</S.Label>

          <S.Input
            type="text"
            name="address"
            id="address"
            onChange={handlaPayoutAddress}
            value={payoutAddress}
            defaultValue={payoutAddress || undefined}
            placeholder="Endereço"
          />
        </S.Field>

        <S.Field>
          {idExternal && (
            <>
              <S.Label htmlFor="address">Opcional: TAG/ID/MEMO</S.Label>

              <S.Input
                type="text"
                name="extraId"
                id="extraId"
                onChange={handlaExtraId}
                value={extraId}
                defaultValue={extraId || undefined}
                placeholder="Opcional: TAG/ID/MEMO"
              />
            </>
          )}
        </S.Field>
      </S.FieldGroup>
    </S.Fieldset>
  );
};

export default ConfirmTransaction;
