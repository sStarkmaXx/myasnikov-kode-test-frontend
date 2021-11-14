import { FilterType, PersonType } from '../App';
import { personsAPI } from '../api/api-persons';
import { Dispatch } from 'redux';
import { setErrorAC, setStatusAC } from './app-reducer';

const initialState: Array<PersonType> = [];
export type ActionsType = ChangeFilterTypeAC | SortByAlphabetTypeAC;

type ChangeFilterTypeAC = {
  type: 'CHANGE-FILTER';
  filter: FilterType;
  search: string;
  persons: Array<PersonType>;
};

type SortByAlphabetTypeAC = {
  type: 'SORT-BY-ALPHABET';
};

export const personsReducer = (
  state: Array<PersonType> = initialState,
  action: ActionsType
): Array<PersonType> => {
  switch (action.type) {
    case 'CHANGE-FILTER':
      if (action.search === '') {
        if (action.filter === 'all') {
          return action.persons;
        } else {
          return action.persons.filter(
            (person) => person.department === action.filter
          );
        }
      } else {
        if (action.filter === 'all') {
          return action.persons.filter(
            (pers) =>
              pers.firstName
                .toLowerCase()
                .indexOf(action.search.toLowerCase()) === 0 ||
              pers.lastName
                .toLowerCase()
                .indexOf(action.search.toLowerCase()) === 0 ||
              pers.userTag
                .toLowerCase()
                .indexOf(action.search.toLowerCase()) === 0
          );
        } else {
          return action.persons
            .filter((person) => person.department === action.filter)
            .filter(
              (pers) =>
                pers.firstName
                  .toLowerCase()
                  .indexOf(action.search.toLowerCase()) === 0 ||
                pers.lastName
                  .toLowerCase()
                  .indexOf(action.search.toLowerCase()) === 0 ||
                pers.userTag
                  .toLowerCase()
                  .indexOf(action.search.toLowerCase()) === 0
            );
        }
      }
    case 'SORT-BY-ALPHABET':
      return [...state].sort(function (a, b) {
        if (a.firstName < b.firstName) {
          return -1;
        }
        if (a.firstName > b.firstName) {
          return 1;
        }
        return 0;
      });
    default:
      return state;
  }
};

export const ChangeFilterAC = (
  filter: FilterType,
  search: string,
  persons: Array<PersonType>
): ChangeFilterTypeAC => {
  return {
    type: 'CHANGE-FILTER',
    filter,
    search,
    persons,
  };
};

export const SortByAlphabetAC = (): SortByAlphabetTypeAC => {
  return {
    type: 'SORT-BY-ALPHABET',
  };
};

export const fetchPersonsTC = (filter: FilterType, search: string) => {
  return (dispatch: Dispatch) => {
    debugger;
    dispatch(setStatusAC('loading'));
    personsAPI.getPersons().then((res) => {
      if (res.status === 500) {
        dispatch(setStatusAC('successed'));
        dispatch(setErrorAC('error'));
      } else {
        dispatch(ChangeFilterAC(filter, search, res.data.items));
        dispatch(setStatusAC('successed'));
      }
    });
  };
};
