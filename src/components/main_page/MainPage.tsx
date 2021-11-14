import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilterType, PersonsStateType, PersonType } from '../../App';
import { fetchPersonsTC } from '../../redux/persons-reducer';
import { AppRootStateType } from '../../redux/store';
import { NetWorkError } from '../error/NetWorkError';
import { List } from '../list/List';
import { SortWindow } from '../sort_window/SortWindow';
import { TopAppBar } from '../top_app_bar/TopAppBar';

type MainPagePropsType = {
  setPerson: (person: PersonType) => void;
};

export type SortWindowType = 'open' | 'close';

export const MainPage: React.FC<MainPagePropsType> = ({ setPerson }) => {
  const [sortWindow, setSortWindow] = useState<SortWindowType>('close');

  const persons = useSelector<AppRootStateType, PersonsStateType>(
    (state) => state.persons
  );

  const error = useSelector<AppRootStateType, string | null>(
    (state) => state.app.error
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPersonsTC('all', ''));
  }, []);

  function filterPersons(filter: FilterType) {
    dispatch(fetchPersonsTC(filter, ''));
  }
  return (
    <div className="mainPage">
      {sortWindow === 'open' && <SortWindow setSortWindow={setSortWindow} />}
      <TopAppBar filterPersons={filterPersons} setSortWindow={setSortWindow} />
      <List filteredPersons={persons} setPerson={setPerson} />
      {error !== null && <NetWorkError />}
    </div>
  );
};
