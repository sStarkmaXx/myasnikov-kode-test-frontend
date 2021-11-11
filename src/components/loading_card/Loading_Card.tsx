import css from './Loading_Card.module.css';

export const LoadingCard = () => {
  return (
    <div className={css.card}>
      <div className={css.avatar}></div>
      <div className={css.text}>
        <div className={css.upLine}>
          <div className={css.name}></div>
        </div>
        <div className={css.department}></div>
      </div>
    </div>
  );
};
