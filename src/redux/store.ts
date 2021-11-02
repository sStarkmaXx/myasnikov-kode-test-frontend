import { createStore, combineReducers } from 'redux';
import { personsReducer } from './persons-reducer';

const rootReducer = combineReducers({
  persons: personsReducer,
});

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>;
