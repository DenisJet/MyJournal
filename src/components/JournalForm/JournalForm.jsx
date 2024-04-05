import './JournalForm.css';
import Button from '../Button/Button';

export default function JournalForm() {
  const addJournalItem = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    console.log(formProps);
  }

  return (
    <form className='journal-form' onSubmit={addJournalItem}>
      <input type='text' name='title'/>
      <input type='date' name='date'/>
      <input type='text' name='tag'/>
      <textarea name='post' cols='30' rows="10"/>
      <Button>Сохранить</Button>
    </form>
  )
}