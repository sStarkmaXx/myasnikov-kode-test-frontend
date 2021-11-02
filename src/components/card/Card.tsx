import css from './Card.module.css';
import { PersonType } from '../../App';

type CardcardTypr = {
  key: string;
  card: PersonType;
};

export const Card: React.FC<CardcardTypr> = ({ card }) => {
  let url = `url(${card.avatarUrl})`;
  return (
    <div className={css.card}>
      <div className={css.avatar} style={{ backgroundImage: url }}></div>
      <div className={css.text}>
        <div className={css.upLine}>
          <div className={css.name}>
            {card.firstName} {card.lastName}
          </div>
          <div className={css.userTag}>{card.userTag}</div>
        </div>
        <div className={css.department}>{card.department}</div>
      </div>
    </div>
  );
};
