import './App.css';
import Button from './components/Button/Button';
import JournalItem from './components/JournalItem/JournalItem';

function App() {
  const data = [
    {
      title: 'title 1',
      text: 'test 1 text asfsdfd dsfgdshdfsh fdhs',
      date: new Date()
    },
    {
      title: 'title 2',
      text: 'test 2 text asfsdfd dsfgdshdfsh fdhs',
      date: new Date()
    }
  ];

  return (
    <>
      <div>Project</div> 
      <Button/>
      <JournalItem title={data[0].title} text={data[0].text} date={data[0].date}/>
      <JournalItem title={data[1].title} text={data[1].text} date={data[1].date}/>
    </>
  );
}

export default App;
