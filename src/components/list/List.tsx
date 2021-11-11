import { PersonType } from '../../App';
import { Card } from '../card/Card';
import { LoadingCard } from '../loading_card/Loading_Card';
import css from './List.module.css';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../redux/store';
import { RequestStatusType } from '../../redux/app-reducer';
import { SearchError } from '../search_error/SearchError';

type ListPropsType = {
  filteredPersons: Array<PersonType>;
};

export const List: React.FC<ListPropsType> = (props) => {
  const status = useSelector<AppRootStateType, RequestStatusType>(
    (state) => state.app.status
  );
  let cards = props.filteredPersons.map((card) => {
    return <Card key={card.id} card={card} />;
  });

  return (
    <div className={css.list}>
      {status === 'loading' ? (
        <div>
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
        </div>
      ) : cards.length === 0 ? (
        <SearchError />
      ) : (
        cards
      )}
    </div>
  );
};
