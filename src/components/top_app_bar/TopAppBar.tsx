import { useState } from 'react';
import { FilterType } from '../../App';
import css from './TopAppBar.module.css';

type TopAppBarPropsType = {
  filterPersons(filter: FilterType): void;
};

export const TopAppBar: React.FC<TopAppBarPropsType> = (props) => {
  const [filter, setFilter] = useState<FilterType>('all');
  return (
    <div className={css.topAppBar}>
      <div className={css.title}>Поиск</div>
      <input type="search" />
      <div className={css.tabs}>
        <div
          className={filter === 'all' ? css.activeTab : css.tab}
          onClick={() => {
            props.filterPersons('all');
            setFilter('all');
          }}
        >
          Все
        </div>
        <div
          className={filter === 'android' ? css.activeTab : css.tab}
          onClick={() => {
            props.filterPersons('android');
            setFilter('android');
          }}
        >
          Android
        </div>
        <div
          className={filter === 'ios' ? css.activeTab : css.tab}
          onClick={() => {
            props.filterPersons('ios');
            setFilter('ios');
          }}
        >
          IOS
        </div>
        <div
          className={filter === 'design' ? css.activeTab : css.tab}
          onClick={() => {
            props.filterPersons('design');
            setFilter('design');
          }}
        >
          Дизайн
        </div>
        <div
          className={filter === 'management' ? css.activeTab : css.tab}
          onClick={() => {
            props.filterPersons('management');
            setFilter('management');
          }}
        >
          Менеджмент
        </div>
        <div
          className={filter === 'qa' ? css.activeTab : css.tab}
          onClick={() => {
            props.filterPersons('qa');
            setFilter('qa');
          }}
        >
          QA
        </div>
        <div
          className={filter === 'back_office' ? css.activeTab : css.tab}
          onClick={() => {
            props.filterPersons('back_office');
            setFilter('back_office');
          }}
        >
          Бэк-офис
        </div>
        <div
          className={filter === 'frontend' ? css.activeTab : css.tab}
          onClick={() => {
            props.filterPersons('frontend');
            setFilter('frontend');
          }}
        >
          Frontend
        </div>
        <div
          className={filter === 'hr' ? css.activeTab : css.tab}
          onClick={() => {
            props.filterPersons('hr');
            setFilter('hr');
          }}
        >
          HR
        </div>
        <div
          className={filter === 'pr' ? css.activeTab : css.tab}
          onClick={() => {
            props.filterPersons('pr');
            setFilter('pr');
          }}
        >
          PR
        </div>
        <div
          className={filter === 'backend' ? css.activeTab : css.tab}
          onClick={() => {
            props.filterPersons('backend');
            setFilter('backend');
          }}
        >
          Backend
        </div>
        <div
          className={filter === 'support' ? css.activeTab : css.tab}
          onClick={() => {
            props.filterPersons('support');
            setFilter('support');
          }}
        >
          Техподдержка
        </div>
        <div
          className={filter === 'analytics' ? css.activeTab : css.tab}
          onClick={() => {
            props.filterPersons('analytics');
            setFilter('analytics');
          }}
        >
          Аналитика
        </div>
      </div>
    </div>
  );
};
