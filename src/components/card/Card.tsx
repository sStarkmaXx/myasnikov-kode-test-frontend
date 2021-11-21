import css from './Card.module.css';
import { PersonType } from '../../App';
import { NavLink } from 'react-router-dom';

type CardcardTypr = {
  key: string;
  card: PersonType;
  setPerson: (person: PersonType) => void;
};

export const Card: React.FC<CardcardTypr> = ({ card, setPerson }) => {
  let url = `url(${card.avatarUrl})`;
  let date = new Date(Date.parse(card.birthday));
  const birthday = date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'short',
  });
  return (
    <NavLink to="/info">
      <div className={css.card} onClick={() => setPerson(card)}>
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
        <div className={css.a}></div>
        <div className={css.birthday}>{birthday}</div>
      </div>
    </NavLink>
  );
};
