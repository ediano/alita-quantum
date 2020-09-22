import styled, { css } from 'styled-components';

export const Fieldset = styled.fieldset`
  display: block;
  margin-top: 50px;
`;

export const Legend = styled.legend`
  font-size: 2rem;
  margin-bottom: 25px;
`;

export const FieldGroup = styled.div``;

export const Field = styled.div`
  margin-bottom: 20px;
`;

export const Obj = styled.span`
  text-transform: uppercase;
  border: 1px solid var(--hover);
  padding: 5px;
  border-radius: 4px;
`;

export const Label = styled.label`
  color: var(--alert);
  text-transform: uppercase;
`;

export const Input = styled.input`
  font-size: 1.2rem;
  width: 100%;
  height: 54px;
  padding: 10px;
  color: var(--primary);
  margin: 15px 0;
  border: 1px solid var(--hover);
  border-radius: 4px;

  ${(props) =>
    props.value === '' &&
    props.name === 'address' &&
    css`
      border: 1px solid var(--alert);
    `}
`;
