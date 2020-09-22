import styled from 'styled-components';

export const Fieldset = styled.fieldset`
  display: flex;
`;

export const Legend = styled.legend`
  font-size: 2rem;
  color: ${(props) =>
    props.theme === 'home' ? 'var(--txt)' : 'var(--primary)'};
`;

export const FieldGroup = styled.div`
  width: 100%;
`;

export const Field = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;

  @media (max-width: 400px) {
    display: block;
  }
`;

export const Label = styled.label`
  color: var(--alert);
`;

export const Input = styled.input`
  width: 100%;
  font-size: 1.2rem;
  width: 100%;
  height: 54px;
  padding: 10px;
  background: var(--primary);
  color: var(--txt);

  @media (min-width: 401px) {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  @media (max-width: 400px) {
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 54px;
  padding: 10px;
  background: var(--bg);
  color: var(--txt);
  text-transform: uppercase;

  @media (min-width: 401px) {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  @media (max-width: 400px) {
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
`;

export const Option = styled.option`
  font-size: 1.2rem;
  height: 54px;
  padding: 10px;
  text-transform: uppercase;
`;

export const Div = styled.div`
  text-align: right;
  margin-top: 25px;
`;

export const IcoButton = styled.button`
  cursor: pointer;

  svg {
    fill: ${(props) =>
      props.theme === 'home' ? 'var(--txt)' : 'var(--primary)'};
  }
`;
