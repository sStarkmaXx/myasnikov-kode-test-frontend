import './App.css';
import { Route, Routes } from 'react-router-dom';
import { PersonInfo } from './components/person_info/PersonInfo';
import { MainPage } from './components/main_page/MainPage';
import { useState } from 'react';

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
  const [person, setPerson] = useState<PersonType>({
    id: '',
    avatarUrl: '',
    firstName: '',
    lastName: '',
    userTag: '',
    department: '',
    position: '',
    birthday: '',
    phone: '',
  });
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage setPerson={setPerson} />}></Route>
        <Route path="/info" element={<PersonInfo person={person} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
