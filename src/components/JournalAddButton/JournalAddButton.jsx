import CardButton from '../CardButton/CardButton';
import './JournalAddButton.css';

export default function JournalAddButton() {
  return (
    <CardButton className='journal-add' onClick={clearForm}>
      + Новое воспоминание
    </CardButton>
  );
}
