import css from './NetWorkError.module.css';
import errorIMG from '../../img/error.png';
import { useDispatch } from 'react-redux';
import { fetchPersonsTC } from '../../redux/persons-reducer';
import { setErrorAC } from '../../redux/app-reducer';

export const NetWorkError = () => {
  const dispatch = useDispatch();
  return (
    <div className={css.layout}>
      <div className={css.error}>
        <img src={errorIMG} alt="" />
        <div className={css.text1}>Какойто сверх разум все сломал</div>
        <div className={css.text2}>Постараемся быстро починить</div>
        <div
          className={css.text3}
          onClick={() => {
            dispatch(setErrorAC(null));
            dispatch(fetchPersonsTC('all', ''));
          }}
        >
          Попробовать снова
        </div>
      </div>
    </div>
  );
};
