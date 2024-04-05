import './JournalForm.css';
import Button from '../Button/Button';
import { useEffect, useState } from 'react';
import cn from 'classnames';

const INITIAL_STATE = {
  title: true,
  text: true,
  date: true
}

export default function JournalForm({onSubmit}) {
  const [formValidState, setFormValidState] = useState({
    title: true,
    text: true,
    date: true,
  })

  useEffect(() => {
    let timerId

    if (!formValidState.date || !formValidState.text || !formValidState.title) {
      timerId = setTimeout(() => {
        setFormValidState(INITIAL_STATE);
      }, 1000)
    }

    return () => {
      clearTimeout(timerId)
    }
  }, [formValidState])

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
      <div>
        <input type='text' name='title' className={cn('input-title', {
          ['invalid']: !formValidState.title 
        })}/>
      </div>
      <div className='form-row'>
        <label htmlFor="date" className='form-label'>
          <img src='/calendar.svg' alt="иконка календаря"/>
          <span>Дата</span>
        </label>
        <input type='date' name='date' id='date' className={cn('input', {
          ['invalid']: !formValidState.date 
        })}/>
      </div>
      <div className='form-row'>
        <label htmlFor="tag" className='form-label'>
          <img src='/folder.svg' alt="иконка папки"/>
          <span>Метки</span>
        </label>
        <input type='text' name='tag' id='tag' className='input'/>
      </div>
      <textarea name='text' cols='30' rows="10" className={cn('input', {
        ['invalid']: !formValidState.text 
      })}/>
      <Button>Сохранить</Button>
    </form>
  )
}