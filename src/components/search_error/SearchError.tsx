import css from './SearchError.module.css';
import searchErrorIMG from '../../img/search-error.png';

export const SearchError = () => {
  return (
    <div className={css.layout}>
      <div className={css.error}>
        <img src={searchErrorIMG} alt="" />
        <div className={css.text1}>Мы никого не нашли</div>
        <div className={css.text2}>Попробуй скорректировать запрос</div>
      </div>
    </div>
  );
};
