import styled from 'styled-components';

export const InfoForm = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  padding: 30px;
  min-height: 500px;
  align-items: center;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--txt);
  padding: 15px;
`;

export const InfoSite = styled.h2`
  font-size: 1.8rem;
  padding: 5px 0;
`;

export const InfoApi = styled.div`
  color: var(--txt);
  padding: 20px 0;
  border-bottom: 1px solid var(--grey);
`;

export const InfoApiLink = styled.a`
  color: var(--txt);
  font-weight: 600;
  background: var(--primary);
  padding: 5px;
  border-radius: 4px;
  display: inline-block;

  &:hover {
    color: var(--secondary);
  }
`;

export const Content = styled.div`
  padding: 30px 0;
  background: var(--alert);
  text-align: center;
`;

export const ContentContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  max-width: 1200px;
  color: var(--txt);
  font-size: 1.2rem;
`;
