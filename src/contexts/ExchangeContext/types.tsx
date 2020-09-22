import { ChangeEvent, FormEvent } from 'react';

export interface Props {
  dataURL: {
    amount: string;
    from: string;
    to: string;
  };
}

export interface Success {
  payinAddress: string;
  payinExtraId?: string;
  payoutAddress: string;
  payoutExtraId?: string;
  fromCurrency: string;
  toCurrency: string;
  id: string;
  amount: number;
}

export interface State {
  propsFlow: boolean;
  payoutAddress: string;
  extraId: string;
  handlaPayoutAddress: (value: ChangeEvent<HTMLInputElement>) => void;
  handlaExtraId: (value: ChangeEvent<HTMLInputElement>) => void;
  handlaClick: () => void;
  handlaSubmit: (value: FormEvent) => void;
  confirmTransaction: boolean;
  error: string;
  spinner: boolean;
  setSpinner: (value: boolean) => void;
}
