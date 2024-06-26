import { useContext, useEffect, useMemo } from 'react';
import CardButton from '../CardButton/CardButton';
import JournalItem from '../JournalItem/JournalItem';
import './JournalList.css';
import { UserContext } from '../../context/user.context';

export default function JournalList({ items, setItem, selectedItem }) {
  const { userId } = useContext(UserContext);

  const sortItems = (a, b) => {
    if (a.date > b.date) {
      return 1;
    } else {
      return -1;
    }
  };

  const filteredItems = useMemo(() => items.filter((el) => el.userId === userId).sort(sortItems), [items, userId]);

  const isActive = (id) => {
    if (selectedItem?.id === id) {
      return true;
    }
    return false;
  };

  if (items.length === 0) {
    return <p>Записей пока нет, добавьте первую</p>;
  }

  return (
    <>
      {filteredItems.map((el) => (
        <CardButton key={el.id} onClick={() => setItem(el)} isActive={isActive(el.id)}>
          <JournalItem title={el.title} text={el.text} date={el.date} />
        </CardButton>
      ))}
    </>
  );
}
