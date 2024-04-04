import './JournalItem.css';

export default function JournalItem({title, text, date}) {
  return (
    <div className='journal-item'>
      <h2 className='journal-item__header'>{title}</h2>
      <div className='journal-item__body'>
        <div className='journal-item__date'>{date.toDateString()}</div>
        <div className='journal-item__text'>{text}</div>
      </div>
    </div>
  );
}