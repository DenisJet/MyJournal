import './App.css';
import CardButton from './components/CardButton/CardButton';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import JournalItem from './components/JournalItem/JournalItem';
import JournalList from './components/JournalList/JournalList';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';

function App() {
  const data = [
    {
      title: 'title 1',
      text: 'test 1 text asfsdfd dsfgdshdfsh fdhs',
      date: new Date()
    },
    {
      title: 'title 2',
      text: 'test 2 text asfsdfd dsfgdshdfsh fdhsasdasdasd',
      date: new Date()
    },
    {
      title: 'title 3',
      text: 'test 3 text asfsdfd',
      date: new Date()
    }
  ];

  return (
    <div className='app'>
    <LeftPanel>
      <Header/>
      <JournalAddButton/>
      <JournalList>
        {data.map(el => (
          <CardButton>
            <JournalItem title={el.title} text={el.text} date={el.date}/>
          </CardButton>
        ))}
      </JournalList>
    </LeftPanel>
    <Body>
      <JournalForm/>
    </Body>
    </div>
  );
}

export default App;
