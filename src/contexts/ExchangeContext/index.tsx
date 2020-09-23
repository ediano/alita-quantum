import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  ChangeEvent,
  FormEvent,
  useEffect,
} from 'react';
import { useHistory } from 'react-router-dom';
import { Props, State, Success } from './types';

import { useListCoinValueContext } from '../ListCoinValueContext';
import api from '../../services/api';

const ExchangeContext = createContext<State>({} as State);

export const ExchangeProvider: React.FC<Props> = ({ dataURL, children }) => {
  const {
    flow,
    setFlow,
    setSelectedCoin,
    minAmount,
    setSendAmount,
  } = useListCoinValueContext();
  const history = useHistory();
  const [payoutAddress, setPayoutAddress] = useState('');
  const [extraId, setExtraId] = useState('');
  const [propsSelectedCoin, setPropsSelectedCoin] = useState(false);
  const [propsFlow, setPropsFlow] = useState(false);

  const [confirmTransaction, setConfirmTransaction] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState<Success | null>({} as Success);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    const { amount, from, to } = dataURL;

    const checkerFow =
      Number(flow.amount) > 0 && Number(flow.amount) / 2 === minAmount;

    function setFromToProps(): void {
      setPropsSelectedCoin(true);
      setSelectedCoin({ from, to });
    }

    function setPropsToFlow(): void {
      setPropsFlow(true);
      setFlow({ amount, from, to });
      setSendAmount(amount);
    }

    !propsSelectedCoin && setFromToProps();
    !propsFlow && checkerFow && setPropsToFlow();
  }, [
    dataURL,
    propsSelectedCoin,
    propsFlow,
    flow,
    setFlow,
    setSelectedCoin,
    minAmount,
    setSendAmount,
  ]);

  useEffect(() => {
    const { amount, from, to } = dataURL;

    if (propsFlow) {
      if (`${from}_${to}` !== `${flow.from}_${flow.to}`) {
        history.push(`/trocar/${flow.amount}/${flow.from}/${flow.to}`);
        setPayoutAddress('');
        setExtraId('');
      } else if (Number(flow.amount) !== Number(amount)) {
        history.push(`/trocar/${flow.amount}/${flow.from}/${flow.to}`);
      }
    }
  }, [propsFlow, dataURL, flow, history]);

  useEffect(() => {
    if (success?.id) {
      history.push(`/transacao/${success.id}`);
    }

    if (error) {
      setSpinner(false);
    }
  }, [flow, success, history, error]);

  const handlaPayoutAddress = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;

      setPayoutAddress(value);
    },
    []
  );

  const handlaExtraId = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setExtraId(value);
  }, []);

  const handlaClick = useCallback(() => {
    if (payoutAddress) {
      if (confirmTransaction) {
        success?.id && setSuccess(null);
        setConfirmTransaction(false);
        setError('');
      } else {
        setConfirmTransaction(true);
      }
    }
  }, []);

  const handlaSubmit = useCallback((event: FormEvent) => {
    event.preventDefault();
    setSpinner(true);

    const { amount, from, to } = flow;

    const data = {
      from,
      to,
      amount,
      address: payoutAddress,
      extraId: extraId || '',
    };

    if (payoutAddress && Number(flow.amount) >= minAmount) {
      api
        .post<Success>(`/transactions/${process.env.REACT_APP_API_KEY}`, data)
        .then((response) => {
          setSuccess(response.data);
        })
        .catch((err) => {
          setError(err.response.data.error);
        });
    }
  }, []);

  const value = {
    propsFlow,
    payoutAddress,
    extraId,
    handlaPayoutAddress,
    handlaExtraId,
    handlaSubmit,
    confirmTransaction,
    handlaClick,
    error,
    spinner,
    setSpinner,
  };

  return (
    <ExchangeContext.Provider value={value}>
      {children}
    </ExchangeContext.Provider>
  );
};

export const useExchangeContext = (): State => {
  const context = useContext(ExchangeContext);
  return context;
};
