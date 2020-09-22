import styled from 'styled-components';

export const Section = styled.section`
  width: 80%;
  padding: 50px 0;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
  margin: 0 auto;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
