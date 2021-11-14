import css from './SortWindow.module.css';
import cancel from '../../img/cancel_16.png';
import { useState } from 'react';
import { SortWindowType } from '../main_page/MainPage';
import { useDispatch } from 'react-redux';
import { SortByAlphabetAC } from '../../redux/persons-reducer';

type SelectType = 'byAlph' | 'byBirth' | 'none';

type SortWindowPropsType = {
  setSortWindow: (isOpen: SortWindowType) => void;
};

export const SortWindow: React.FC<SortWindowPropsType> = ({
  setSortWindow,
}) => {
  const dispatch = useDispatch();
  const [select, setSelect] = useState<SelectType>('none');
  return (
    <div className={css.layer}>
      <div className={css.window}>
        <div className={css.header}>
          Сортировка
          <div className={css.btn} onClick={() => setSortWindow('close')}>
            <img src={cancel} alt="" />
          </div>
        </div>
        <div className={css.sort}>
          <div
            className={css.line}
            onClick={() => {
              setSelect('byAlph');
              dispatch(SortByAlphabetAC());
              setSortWindow('close');
            }}
          >
            <div className={select === 'byAlph' ? css.select : css.check}></div>{' '}
            По алфавиту
          </div>
          <div className={css.line} onClick={() => setSelect('byBirth')}>
            <div
              className={select === 'byBirth' ? css.select : css.check}
            ></div>
            По дню рождения
          </div>
        </div>
      </div>
    </div>
  );
};
