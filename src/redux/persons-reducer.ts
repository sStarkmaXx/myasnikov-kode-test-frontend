import { FilterType, PersonType } from '../App';
import { personsAPI } from '../api/api-persons';
import { Dispatch } from 'redux';

const initialState: Array<PersonType> = [];
export type ActionsType = ChangeFilterTypeAC | SetPersonsTypeAC;

type ChangeFilterTypeAC = {
  type: 'CHANGE-FILTER';
  filter: FilterType;
};

type SetPersonsTypeAC = {
  type: 'SET-PERSONS';
  persons: Array<PersonType>;
};

export const personsReducer = (
  state: Array<PersonType> = initialState,
  action: ActionsType
): Array<PersonType> => {
  switch (action.type) {
    case 'SET-PERSONS':
      return [...action.persons];
    case 'CHANGE-FILTER':
      if (action.filter === 'all') {
        return state;
      } else {
        return [...state].filter(
          (person) => person.department === action.filter
        );
      }
    default:
      return state;
  }
};

export const ChangeFilterAC = (filter: FilterType): ChangeFilterTypeAC => {
  return {
    type: 'CHANGE-FILTER',
    filter,
  };
};

export const SetPersonsAC = (persons: Array<PersonType>): SetPersonsTypeAC => {
  return {
    type: 'SET-PERSONS',
    persons,
  };
};

export const fetchPersonsTC = () => {
  return (dispatch: Dispatch) => {
    personsAPI
      .getPersons()
      .then((res) => dispatch(SetPersonsAC(res.data.items)));
    debugger;
  };
};
