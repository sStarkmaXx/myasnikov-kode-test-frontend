import { useState } from 'react';
import { FilterType } from '../../App';
import css from './TopAppBar.module.css';
import search from '../../img/search.png';
import list_ui from '../../img/list-ui-alt.png';
import { useDispatch } from 'react-redux';
import { fetchPersonsTC } from '../../redux/persons-reducer';

type TopAppBarPropsType = {
  filterPersons(filter: FilterType): void;
};

export const TopAppBar: React.FC<TopAppBarPropsType> = ({ filterPersons }) => {
  const [filter, setFilter] = useState<FilterType>('all');
  const [inputSearch, setInputSearch] = useState<string>('');
  const dispatch = useDispatch();
  return (
    <div className={css.topAppBar}>
      <div className={css.title}>Поиск</div>
      <div className={css.search}>
        <img src={search} alt="" />
        <input
          type="search"
          placeholder="Введите имя, фамилию, ник"
          value={inputSearch}
          onChange={(e) => {
            setInputSearch(e.target.value);
            dispatch(fetchPersonsTC(filter, e.target.value));
          }}
        />
        <img src={list_ui} alt="" />
      </div>
      <div className={css.tabs}>
        <div
          className={filter === 'all' ? css.activeTab : css.tab}
          onClick={() => {
            filterPersons('all');
            setFilter('all');
            setInputSearch('');
          }}
        >
          Все
        </div>
        <div
          className={filter === 'android' ? css.activeTab : css.tab}
          onClick={() => {
            filterPersons('android');
            setFilter('android');
            setInputSearch('');
          }}
        >
          Android
        </div>
        <div
          className={filter === 'ios' ? css.activeTab : css.tab}
          onClick={() => {
            filterPersons('ios');
            setFilter('ios');
            setInputSearch('');
          }}
        >
          IOS
        </div>
        <div
          className={filter === 'design' ? css.activeTab : css.tab}
          onClick={() => {
            filterPersons('design');
            setFilter('design');
            setInputSearch('');
          }}
        >
          Дизайн
        </div>
        <div
          className={filter === 'management' ? css.activeTab : css.tab}
          onClick={() => {
            filterPersons('management');
            setFilter('management');
            setInputSearch('');
          }}
        >
          Менеджмент
        </div>
        <div
          className={filter === 'qa' ? css.activeTab : css.tab}
          onClick={() => {
            filterPersons('qa');
            setFilter('qa');
            setInputSearch('');
          }}
        >
          QA
        </div>
        <div
          className={filter === 'back_office' ? css.activeTab : css.tab}
          onClick={() => {
            filterPersons('back_office');
            setFilter('back_office');
            setInputSearch('');
          }}
        >
          Бэк-офис
        </div>
        <div
          className={filter === 'frontend' ? css.activeTab : css.tab}
          onClick={() => {
            filterPersons('frontend');
            setFilter('frontend');
            setInputSearch('');
          }}
        >
          Frontend
        </div>
        <div
          className={filter === 'hr' ? css.activeTab : css.tab}
          onClick={() => {
            filterPersons('hr');
            setFilter('hr');
            setInputSearch('');
          }}
        >
          HR
        </div>
        <div
          className={filter === 'pr' ? css.activeTab : css.tab}
          onClick={() => {
            filterPersons('pr');
            setFilter('pr');
            setInputSearch('');
          }}
        >
          PR
        </div>
        <div
          className={filter === 'backend' ? css.activeTab : css.tab}
          onClick={() => {
            filterPersons('backend');
            setFilter('backend');
            setInputSearch('');
          }}
        >
          Backend
        </div>
        <div
          className={filter === 'support' ? css.activeTab : css.tab}
          onClick={() => {
            filterPersons('support');
            setFilter('support');
            setInputSearch('');
          }}
        >
          Техподдержка
        </div>
        <div
          className={filter === 'analytics' ? css.activeTab : css.tab}
          onClick={() => {
            filterPersons('analytics');
            setFilter('analytics');
            setInputSearch('');
          }}
        >
          Аналитика
        </div>
      </div>
    </div>
  );
};
