import React from 'react';
import { Helmet } from 'react-helmet';
import { ListCoinValueProvider } from '../../contexts/ListCoinValueContext';
import { ExchangeProvider } from '../../contexts/ExchangeContext';

import Pages from '../../components/Layout/pages';
import ExchangeSubmit from '../../components/Form/ExchangeSubmit';
import TextSponsored from '../../components/TextSponsored';

import { site } from '../../config/site';

import * as S from './styles';

interface Props {
  match: {
    params: {
      amount: string;
      from: string;
      to: string;
    };
  };
}

const Exchange: React.FC<Props> = ({ match }) => (
  <Pages>
    <Helmet title={`Exchange | ${site.title}`} />
    <S.Section>
      <ListCoinValueProvider>
        <ExchangeProvider dataURL={match.params}>
          <ExchangeSubmit />
          <TextSponsored />
        </ExchangeProvider>
      </ListCoinValueProvider>
    </S.Section>
  </Pages>
);

export default Exchange;
