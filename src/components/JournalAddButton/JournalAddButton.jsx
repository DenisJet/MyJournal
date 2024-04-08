import CardButton from '../CardButton/CardButton';
import './JournalAddButton.css';

export default function JournalAddButton({ clearForm }) {
  return (
    <CardButton className='journal-add' onClick={clearForm}>
      + Новое воспоминание
    </CardButton>
  );
}
