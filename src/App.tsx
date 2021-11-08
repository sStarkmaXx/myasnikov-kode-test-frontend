import './App.css';
import { TopAppBar } from './components/top_app_bar/TopAppBar';
import { List } from './components/list/List';
import { AppRootStateType } from './redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPersonsTC } from './redux/persons-reducer';
import { useEffect } from 'react';

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

export type PersonsStateType = Array<PersonType>;

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPersonsTC('all'));
  }, []);

  function filterPersons(filter: FilterType) {
    dispatch(fetchPersonsTC(filter));
  }

  return (
    <div className="App">
      <TopAppBar filterPersons={filterPersons} />
      <List filteredPersons={persons} />
    </div>
  );
}

export default App;
