type InitialStateType = {
  status: RequestStatusType;
  error: string | null;
};

type ActionsType =
  | ReturnType<typeof setErrorAC>
  | ReturnType<typeof setStatusAC>;

export type RequestStatusType = 'idle' | 'loading' | 'successed' | 'failed';

const initialState: InitialStateType = {
  status: 'loading',
  error: null,
};

export const appReducer = (
  state: InitialStateType = initialState,
  action: ActionsType
) => {
  switch (action.type) {
    case 'APP/SET-STATUS':
      return { ...state, status: action.status };
    case 'APP/SET-ERROR':
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export const setStatusAC = (status: RequestStatusType) =>
  ({
    type: 'APP/SET-STATUS',
    status,
  } as const);

export const setErrorAC = (error: string | null) =>
  ({
    type: 'APP/SET-ERROR',
    error,
  } as const);
