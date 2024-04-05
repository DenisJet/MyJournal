import './JournalForm.css';
import Button from '../Button/Button';
import { useState } from 'react';
import cn from 'classnames';

export default function JournalForm({onSubmit}) {
  const [formValidState, setFormValidState] = useState({
    title: true,
    text: true,
    date: true,
  })

  const addJournalItem = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    let isFormValid = true;

    if (!formProps.title?.trim().length) {
      setFormValidState(state => ({...state, title: false}));
      isFormValid = false;
    } else {
      setFormValidState(state => ({...state, title: true}))
    }
    if (!formProps.text?.trim().length) {
      setFormValidState(state => ({...state, text: false}));
      isFormValid = false;
    } else {
      setFormValidState(state => ({...state, text: true}))
    }
    if (!formProps.date) {
      setFormValidState(state => ({...state, date: false}));
      isFormValid = false;
    } else {
      setFormValidState(state => ({...state, date: true}))
    }

    if (!isFormValid) {
      return
    }

    onSubmit(formProps);
  }

  return (
    <form className='journal-form' onSubmit={addJournalItem}>
      <input type='text' name='title' className={cn('input', {
        ['invalid']: !formValidState.title 
      })}/>
      <input type='date' name='date' className={cn('input', {
        ['invalid']: !formValidState.date 
      })}/>
      <input type='text' name='tag'/>
      <textarea name='text' cols='30' rows="10" className={cn('input', {
        ['invalid']: !formValidState.text 
      })}/>
      <Button>Сохранить</Button>
    </form>
  )
}