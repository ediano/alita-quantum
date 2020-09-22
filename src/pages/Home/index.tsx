import React from 'react';
import { Helmet } from 'react-helmet';
import { ListCoinValueProvider } from '../../contexts/ListCoinValueContext';

import Index from '../../components/Layout';
import HomeSubmit from '../../components/Form/HomeSubmit';

import { site } from '../../config/site';

import * as S from './styles';

const Home: React.FC = () => (
  <Index>
    <Helmet title={`Home | ${site.title}`} />

    <S.InfoForm>
      <S.Info>
        <S.InfoSite>{site.project}</S.InfoSite>
        <S.InfoApi>
          {site.apiInformation.ref}
          <S.InfoApiLink href={site.apiInformation.urlSite} target="block">
            {site.apiInformation.titleSite}
          </S.InfoApiLink>
        </S.InfoApi>
      </S.Info>

      <ListCoinValueProvider>
        <HomeSubmit />
      </ListCoinValueProvider>
    </S.InfoForm>

    <S.Content>
      <S.ContentContainer>{site.alert}</S.ContentContainer>
    </S.Content>
  </Index>
);

export default Home;
