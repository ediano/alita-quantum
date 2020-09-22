import styled from 'styled-components';

export const Section = styled.section`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto 50px auto;
  padding-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  text-align: center;

  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }

  border-top: 1px solid var(--grey);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 4px;
  transition: 0.5s;
  padding: 30px;

  &:hover {
    box-shadow: 0 0 12px 0 var(--secondary);
  }
`;

export const ContentContainer = styled.div``;

export const Title = styled.h1`
  margin: 0 0 20px 0;
`;

export const LinkImg = styled.a``;

export const Img = styled.img`
  width: 100px;
  max-width: 100%;
  height: auto;
`;

export const Description = styled.p`
  margin: 15px 0 25px 0;
`;

export const Link = styled.a`
  background: var(--bg);
  border-radius: 4px;
  padding: 5px;
  color: var(--txt);
  font-weight: 600;
  font-size: 1.2rem;
`;
