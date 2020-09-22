import React from 'react';
import { Helmet } from 'react-helmet';
import { ListCoinValueProvider } from '../../contexts/ListCoinValueContext';

import Page from '../../components/Layout/pages';
import TransactionDetails from '../../components/TransactionDetails';

import { site } from '../../config/site';

import * as S from './styles';

interface Props {
  match: {
    params: {
      id: string;
    };
  };
}

const Transaction: React.FC<Props> = ({ match }) => (
  <Page>
    <Helmet title={`Transação | ${site.title}`} />
    <S.Main>
      <ListCoinValueProvider>
        <TransactionDetails id={match.params.id} />
      </ListCoinValueProvider>
    </S.Main>
  </Page>
);

export default Transaction;
