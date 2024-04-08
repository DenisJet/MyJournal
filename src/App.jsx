import './App.css';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import JournalList from './components/JournalList/JournalList';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import { useLocalStorage } from './hooks/use-localstorage.hook';
import { UserContextProvider } from './context/user.context';
import { useState } from 'react';

function mapItems(items) {
  if (!items) {
    return [];
  }

  return items.map((i) => ({
    ...i,
    date: new Date(i.date),
  }));
}

function App() {
  const [items, setItems] = useLocalStorage('data');
  const [selectedItem, setSelectedItem] = useState({});

  const addItem = (item) => {
    if (!item.id) {
      setItems([
        ...mapItems(items),
        {
          ...item,
          id: items?.length > 0 ? Math.max(...items.map((i) => i.id)) + 1 : 1,
          date: new Date(item.date),
        },
      ]);
    } else {
      setItems([
        ...mapItems(items).map((i) => {
          if (i.id === item.id) {
            return { ...item };
          }
          return i;
        }),
      ]);
    }
  };

  return (
    <UserContextProvider>
      <div className='app'>
        <LeftPanel>
          <Header />
          <JournalAddButton />
          <JournalList items={mapItems(items)} setItem={setSelectedItem} />
        </LeftPanel>
        <Body>
          <JournalForm onSubmit={addItem} data={selectedItem} />
        </Body>
      </div>
    </UserContextProvider>
  );
}

export default App;
