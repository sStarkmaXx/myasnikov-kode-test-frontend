import './App.css';
import { TopAppBar } from './components/top_app_bar/TopAppBar';
import { List } from './components/list/List';
import { AppRootStateType } from './redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeFilterAC } from './redux/persons-reducer';

export type PersonType = {
  id: string;
  avatarUrl: string;
  firstName: string;
  lastName: string;
  userTag: string;
  department: string;
  position: string;
  birthday: string;
  phone: string;
};

export type PersonsStateType = {
  persons: Array<PersonType>;
  filteredPersons: Array<PersonType>;
};

export type FilterType =
  | 'all'
  | 'android'
  | 'ios'
  | 'design'
  | 'management'
  | 'qa'
  | 'back_office'
  | 'frontend'
  | 'hr'
  | 'pr'
  | 'backend'
  | 'support'
  | 'analytics';

function App() {
  const persons = useSelector<AppRootStateType, PersonsStateType>(
    (state) => state.persons
  );

  let filteredPersons = [];

  if (persons.filteredPersons.length === 0) {
    filteredPersons = persons.persons;
  } else {
    filteredPersons = persons.filteredPersons;
  }

  const dispatch = useDispatch();

  function filterPersons(filter: FilterType) {
    dispatch(ChangeFilterAC(filter));
  }

  return (
    <div className="App">
      <TopAppBar filterPersons={filterPersons} />
      <List filteredPersons={filteredPersons} />
    </div>
  );
}

export default App;
