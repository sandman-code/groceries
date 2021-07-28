import './App.css';
import Home from './components/Home';
import ListAccordian from './components/layouts/ListAccordian';

const items = [{name: 'food'}, { name: 'food2'}]

function App() {
  return (
    <div className="App">
      <Home />
      <ListAccordian items={items}/>
    </div>
  );
}

export default App;


