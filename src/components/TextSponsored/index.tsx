import React from 'react';
import { useListCoinValueContext } from '../../contexts/ListCoinValueContext';
import { useExchangeContext } from '../../contexts/ExchangeContext';

import * as S from './styles';

const TextSponsored: React.FC = () => {
  const { flow } = useListCoinValueContext();
  const { propsFlow } = useExchangeContext();

  return (
    <>
      {propsFlow && (
        <S.Section>
          {flow.to && (
            <S.Content>
              <S.WalletTitle>
                Já tem uma carteira <S.TextUppercase>{flow.to}</S.TextUppercase>
                ?
              </S.WalletTitle>

              <S.Wrapper>
                Abra uma agora mesmo na Atomic Wallet
                <S.ImgLink
                  href="https://atomicwallet.io/?kid=XVPXP"
                  target="black"
                >
                  <S.ContentImg src="https://i.imgur.com/UWEq277.png" />
                </S.ImgLink>
              </S.Wrapper>

              <S.LinkWallet
                href="https://atomicwallet.io/?kid=XVPXP"
                target="black"
              >
                Acessar agora!
              </S.LinkWallet>
            </S.Content>
          )}

          <S.Content>
            <S.NavTitle>Mais privacidade!</S.NavTitle>

            <S.Wrapper>
              Ganhe BAT ao navegador com mais privacidade e sem anúncios!
              <S.ImgLink href="http://bit.ly/2DqwRrS" target="black">
                <S.ContentImg src="https://i.imgur.com/jgrNDxS.png" />
              </S.ImgLink>
            </S.Wrapper>

            <S.LinkNav href="http://bit.ly/2DqwRrS" target="black">
              Acessar agora!
            </S.LinkNav>
          </S.Content>

          {(flow.to === 'btc' || flow.from === 'btc') && (
            <S.Content>
              <S.MinerTitle>Quer ganhar mais BTC?</S.MinerTitle>

              <S.Wrapper>
                Comece a minerar Bitcoin através do navegador com a CryptoTab
                <S.ImgLink
                  href="https://cryptotabbrowser.com/15537985"
                  target="black"
                >
                  <S.ContentImg src="https://i.imgur.com/BXCTaEX.png" />
                </S.ImgLink>
              </S.Wrapper>

              <S.LinkMiner
                href="https://cryptotabbrowser.com/14543548"
                target="black"
              >
                Acessar agora!
              </S.LinkMiner>
            </S.Content>
          )}
        </S.Section>
      )}
    </>
  );
};

export default TextSponsored;
