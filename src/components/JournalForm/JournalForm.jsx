import './JournalForm.css';
import Button from '../Button/Button';
import { useEffect, useReducer } from 'react';
import cn from 'classnames';
import { formReducer, INITIAL_STATE } from './JournalForm.state';

export default function JournalForm({onSubmit}) {
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
  const {isValid, isFormReadyToSubmit, values} = formState;

  useEffect(() => {
    let timerId

    if (!isValid.date || !isValid.text || !isValid.title) {
      timerId = setTimeout(() => {
        dispatchForm({type: 'RESET_VALIDITY'})
      }, 1000)
    }

    return () => {
      clearTimeout(timerId)
    }
  }, [isValid])

  useEffect(() => {
    if (isFormReadyToSubmit) {
      onSubmit(values);
    }
  }, [isFormReadyToSubmit])

  const addJournalItem = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    dispatchForm({type: 'SUBMIT', payload: formProps})
  }

  return (
    <form className='journal-form' onSubmit={addJournalItem}>
      <div>
        <input type='text' name='title' className={cn('input-title', {
          ['invalid']: !isValid.title 
        })}/>
      </div>
      <div className='form-row'>
        <label htmlFor="date" className='form-label'>
          <img src='/calendar.svg' alt="иконка календаря"/>
          <span>Дата</span>
        </label>
        <input type='date' name='date' id='date' className={cn('input', {
          ['invalid']: !isValid.date 
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
        ['invalid']: !isValid.text 
      })}/>
      <Button>Сохранить</Button>
    </form>
  )
}