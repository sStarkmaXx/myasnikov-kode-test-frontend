import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import { personsReducer } from './persons-reducer';

const rootReducer = combineReducers({
  persons: personsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare));

export type AppRootStateType = ReturnType<typeof rootReducer>;
