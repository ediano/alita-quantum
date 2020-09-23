import { ChangeEvent, FormEvent } from 'react';

export interface Coins {
  ticker: string;
  name: string;
  image: string;
  hasExternalId: string;
}

export interface Flow {
  amount: string;
  from: string;
  to: string;
}

export interface SelectedCoin {
  from: string;
  to: string;
}

export interface EstimatedAmount {
  estimatedAmount: number;
}

export interface MinAmount {
  minAmount: number;
}

export interface State {
  coins: Coins[];
  minAmount: number;
  estimatedAmount: number;
  flow: Flow;
  setFlow: (value: Flow) => void;
  selectedCoin: SelectedCoin;
  setSelectedCoin: (value: SelectedCoin) => void;
  idExternal: boolean;
  handlaSendValue: (value: ChangeEvent<HTMLInputElement>) => void;
  handlaSelectedCoin: (value: ChangeEvent<HTMLSelectElement>) => void;
  handlaExchange: () => void;
  handlaSubmit: (value: FormEvent) => void;
  sendAmount: string;
  setSendAmount: (value: string) => void;
}
