import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

export const TextUppercase = styled.span`
  text-transform: uppercase;
`;

export const Content = styled.div`
  padding: 5px 5px 15px 5px;
  margin: 25px 0;
  width: 100%;
  border-bottom: 1px solid var(--hover);
`;

export const ContentTitle = styled.div`
  margin-bottom: 15px;
  font-size: 1.4rem;

  @media (max-width: 700px) {
    text-align: center;
  }
`;

export const WalletTitle = styled(ContentTitle)`
  color: #2b9bee;
`;

export const MinerTitle = styled(ContentTitle)`
  color: #f3922c;
`;

export const NavTitle = styled(ContentTitle)`
  color: rgb(227, 61, 38);
`;

export const Wrapper = styled.div`
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const ImgLink = styled.a``;

export const Links = styled.a`
  padding: 5px;
  border-radius: 4px;
  color: var(--txt);

  &:hover {
    background: var(--primary);
  }
`;

export const LinkWallet = styled(Links)`
  background: #2b9bee;
`;

export const LinkMiner = styled(Links)`
  background: #f3922c;
`;

export const LinkNav = styled(Links)`
  background: rgb(227, 61, 38);
`;

export const ContentImg = styled.img`
  display: block;
  width: 50px;
  margin: 0 auto;
`;
