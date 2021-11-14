import css from './PersonInfo.module.css';
import backImg from '../../img/Right.png';
import phone from '../../img/phone-alt.png';
import favorite from '../../img/favorite.png';
import { PersonType } from '../../App';
import { NavLink } from 'react-router-dom';

type PersonInfoPropsType = {
  person: PersonType;
};

export const PersonInfo: React.FC<PersonInfoPropsType> = ({ person }) => {
  let url = `url(${person.avatarUrl})`;
  const number =
    '+7 (' +
    person.phone.slice(0, 3) +
    ') ' +
    person.phone.slice(4, 7) +
    ' ' +
    person.phone.slice(8, 10) +
    ' ' +
    person.phone.slice(10);

  const href = 'tel:+7' + person.phone.split(' ').join('');

  const milliseconds = Date.parse(person.birthday);
  const date = new Date(milliseconds);
  const birthday = date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const nowDate = Date.now();
  const delta = nowDate - milliseconds;
  const age = Math.floor(delta / (1000 * 60 * 60 * 24 * 30 * 12));
  let txt = '';
  let count = age % 100;

  if (count >= 5 && count <= 20) {
    txt = 'лет';
  } else {
    count = count % 10;
    if (count == 1) {
      txt = 'год';
    } else if (count >= 2 && count <= 4) {
      txt = 'года';
    } else {
      txt = 'лет';
    }
  }

  return (
    <div className={css.personInfo}>
      <div className={css.header}>
        <div className={css.btnwrap}>
          <NavLink to="/">
            <img src={backImg} alt="" />
          </NavLink>
        </div>
        <div className={css.avatar} style={{ backgroundImage: url }}></div>
        <div className={css.textwrap}>
          <div className={css.text}>
            <div className={css.upLine}>
              <div className={css.name}>
                {person.firstName} {person.lastName}
              </div>
              <div className={css.userTag}>{person.userTag}</div>
            </div>
            <div className={css.department}>{person.department}</div>
          </div>
        </div>
      </div>
      <div className={css.info}>
        <div className={css.date}>
          <img src={favorite} alt="" />
          <div className={css.birthday}>{birthday}</div>
          <div className={css.age}>
            {age} {txt}
          </div>
        </div>
        <div className={css.separator}></div>
        <div className={css.number}>
          <img src={phone} alt="" />
          <a href={href}>{number}</a>
        </div>
      </div>
    </div>
  );
};
