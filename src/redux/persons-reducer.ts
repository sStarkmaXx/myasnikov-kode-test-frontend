import { FilterType, PersonType } from '../App';
import { personsAPI } from '../api/api-persons';
import { Dispatch } from 'redux';

const initialState: Array<PersonType> = [];
export type ActionsType = ChangeFilterTypeAC;

type ChangeFilterTypeAC = {
  type: 'CHANGE-FILTER';
  filter: FilterType;
  persons: Array<PersonType>;
};

export const personsReducer = (
  state: Array<PersonType> = initialState,
  action: ActionsType
): Array<PersonType> => {
  switch (action.type) {
    case 'CHANGE-FILTER':
      if (action.filter === 'all') {
        return action.persons;
      } else {
        return action.persons.filter(
          (person) => person.department === action.filter
        );
      }
    default:
      return state;
  }
};

export const ChangeFilterAC = (
  filter: FilterType,
  persons: Array<PersonType>
): ChangeFilterTypeAC => {
  return {
    type: 'CHANGE-FILTER',
    filter,
    persons,
  };
};

export const fetchPersonsTC = (filter: FilterType) => {
  return (dispatch: Dispatch) => {
    personsAPI
      .getPersons()
      .then((res) => dispatch(ChangeFilterAC(filter, res.data.items)));
  };
};
