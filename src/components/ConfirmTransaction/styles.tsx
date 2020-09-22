import styled from 'styled-components';

export const Section = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentSection = styled.section`
  width: 90%;
  max-width: 500px;
  padding: 30px;
  border-radius: 4px;
`;

export const ContentDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const DivContent = styled.div`
  border: 1px solid var(--hover);
  padding: 15px;
  border-radius: 4px;
`;

export const Address = styled.div`
  display: block;
  margin: 30px 0;
  overflow: auto;
  padding-bottom: 10px;
`;

export const Span = styled.span`
  display: block;
`;

export const SpanTitle = styled(Span)`
  font-weight: 600;
  margin-bottom: 10px;
`;

export const SpanFromTo = styled(Span)`
  text-transform: uppercase;
  margin: 10px 0;
  font-weight: 600;
`;

export const SpanAlert = styled(Span)`
  color: var(--alert);
`;

export const SpanAddress = styled(Span)`
  margin-bottom: 30px;
  border-bottom: 1px solid var(--hover);
`;

export const SpanId = styled(Span)`
  border-bottom: 1px solid var(--hover);
`;

export const ButtonDiv = styled.div`
  margin: 0 auto;
  display: flex;
  margin-top: 20px;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 10px;
  font-size: 1.4rem;
  border-radius: 4px;
  margin: 10px;
  justify-content: center;
  display: flex;
  flex: 1;

  @media (max-width: 700px) {
    display: block;
    text-align: center;
  }
`;

export const Confirm = styled(Button)`
  background: var(--confirm);
  color: var(--txt);
`;

export const Cancel = styled(Button)`
  color: var(--alert);
`;

export const ErrContent = styled.div`
  display: block;
  background: var(--alert);
  padding: 30px;
  border-radius: 4px;
  margin-bottom: 20px;
`;

export const ErrSpanWeight = styled.span`
  font-weight: 600;
  color: var(--txt);
  overflow: auto;
`;

export const ErrSpan = styled(ErrSpanWeight)`
  text-transform: uppercase;
`;
