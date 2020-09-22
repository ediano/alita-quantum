import React from 'react';

import { affiliates } from './affiliates';

import * as S from './styles';

const Sponsored: React.FC = () => (
  <S.Section>
    {affiliates.map((item) => (
      <S.Content key={item.url}>
        <S.ContentContainer>
          <S.LinkImg
            href={item.url}
            target="black"
            rel="nofollow noopener noreferrer"
          >
            <S.Img src={item.img} alt={item.title} />
          </S.LinkImg>
          <S.Title>{item.title}</S.Title>
          <S.Description>{item.description}</S.Description>
        </S.ContentContainer>
        <S.Link
          href={item.url}
          target="black"
          rel="nofollow noopener noreferrer"
        >
          Acessar
        </S.Link>
      </S.Content>
    ))}
  </S.Section>
);

export default Sponsored;
