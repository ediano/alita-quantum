import React from 'react';

import * as S from './styles';

const Notification: React.FC = () => (
  <S.Section>
    <S.Paragraph>
      Este projeto foi criado com a finalidade de servir como base e modelo de
      desenvolvimento para novos serviços de troca de criptomoedas, consumindo a
      API da ChangeNOW. E está disponível no GitHub de forma livre sob licença
      MIT,{' '}
      <S.TxtLink href="https://github.com/ediano/alita-quantum" target="_black">
        aceitamos contribuições
      </S.TxtLink>
      , pois ainda temos muitas coisas para melhorar, ou se preferir, você pode
      simplesmente clonar o repositório e adaptado de acordo com sua
      necessidade.
    </S.Paragraph>

    <S.Paragraph>
      Caso deseja realizar uma transação para testes, fique à vontade, este
      projeto é 100% funcional. Para construir um projeto usando a API da
      ChangeNOW, você deverá se tornar um{' '}
      <S.TxtLink
        href="https://changenow.io?link_id=9f50d5b539b6a2"
        target="black"
      >
        afiliado
      </S.TxtLink>{' '}
      para aderir a sua API_KEY.
    </S.Paragraph>

    <S.BtcContent>
      <S.Link
        href="https://documenter.getpostman.com/view/8180765/SVfTPnM8?version=latest#intro"
        target="black"
      >
        Consulte a documentação oficial da ChangeNOW API
      </S.Link>
    </S.BtcContent>
  </S.Section>
);

export default Notification;
