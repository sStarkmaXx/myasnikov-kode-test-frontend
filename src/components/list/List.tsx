import { PersonType } from '../../App';
import { Card } from '../card/Card';
import css from './List.module.css';

type ListPropsType = {
  filteredPersons: Array<PersonType>;
};

export const List: React.FC<ListPropsType> = (props) => {
  let cards = props.filteredPersons.map((card) => {
    return <Card key={card.id} card={card} />;
  });

  return <div className={css.list}>{cards}</div>;
};
