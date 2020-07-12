import { createStore } from 'redux';
import { Reducer, InitialState, initialEstate } from './reducer';

export const ConfigureStore = () => {
  const store = createStore(
    Reducer,
    initialEstate
  )

  return store;
}