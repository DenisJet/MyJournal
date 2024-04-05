import { useState } from 'react';
import './App.css';
import CardButton from './components/CardButton/CardButton';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import JournalItem from './components/JournalItem/JournalItem';
import JournalList from './components/JournalList/JournalList';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';

const INITIAL_STATE = [
  {
    id: 1,
    title: 'title 1',
    text: 'test 1 text asfsdfd dsfgdshdfsh fdhs',
    date: new Date()
  },
  {
    id: 2,
    title: 'title 2',
    text: 'test 2 text asfsdfd dsfgdshdfsh fdhsasdasdasd',
    date: new Date()
  },
];

function App() {
  const [items, setItems] = useState(INITIAL_STATE);

  const sortItems = (a, b) => {
    if (a.date > b.date) {
      return 1;
    } else {
      return -1;
    }
  }

  const addItem = (item) => {
    setItems(oldItems => [...oldItems, {
      id: Math.max(...oldItems.map(i => i.id)) + 1,
      text: item.text,
      title: item.title,
      date: new Date(item.date)
    }])
  }
 
  return (
    <div className='app'>
    <LeftPanel>
      <Header/>
      <JournalAddButton/>
      <JournalList>
        {items.sort(sortItems).map(el => (
          <CardButton key={el.id}>
            <JournalItem title={el.title} text={el.text} date={el.date}/>
          </CardButton>
        ))}
      </JournalList>
    </LeftPanel>
    <Body>
      <JournalForm onSubmit={addItem}/>
    </Body>
    </div>
  );
}

export default App;
