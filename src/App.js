import Navbar from './components/Navbar';
import Menu from './components/Menu';
import { useState } from 'react';
import './styles/App.css';

const demo_data = '[{"text":"Soda","date":"2023-03-22","value":"3.5","id":6212},{"text":"Some Grapes","date":"2023-04-08","value":"8.9","id":7660},{"text":"Snacks","date":"2023-03-21","value":"12","id":4650},{"text":"Pizza","date":"2023-04-01","value":"14","id":1221},{"text":"Groceries LIDL","date":"2023-03-24","value":"14.8","id":1635},{"text":"Bus Pass","date":"2023-03-17","value":"16","id":8038},{"text":"Groceries","date":"2023-04-10","value":"17","id":3850},{"text":"Taxi","date":"2023-04-07","value":"21.4","id":5806},{"text":"Antibiotics","date":"2023-04-11","value":"21.9","id":2953},{"text":"Shaorma Warda","date":"2023-03-29","value":"22","id":3914},{"text":"Groceries","date":"2023-04-19","value":"27","id":3357},{"text":"Groceries","date":"2023-03-25","value":"27","id":7198},{"text":"Dinner with friends","date":"2023-03-26","value":"35.9","id":2920},{"text":"Groceries","date":"2023-04-11","value":"38","id":1132},{"text":"Movie w/ friends","date":"2023-03-18","value":"45.2","id":8006},{"text":"Household Items","date":"2023-03-23","value":"61.5","id":4852},{"text":"Train Ticket","date":"2023-03-16","value":"80","id":3991},{"text":"Pair of jeans","date":"2023-04-05","value":"120","id":4052},{"text":"Clothing","date":"2023-04-27","value":"165","id":2377},{"text":"ComicCon Ticket","date":"2023-03-26","value":"170","id":5744},{"text":"New Video Game","date":"2023-03-22","value":"200","id":5820}]'

function App() {

  const [menu, setMenu] = useState('dash');
  const [data, setData] = useState(JSON.parse(localStorage.getItem('my-project-data')) || JSON.parse(demo_data))
  const [budget, setBudget] = useState(JSON.parse(localStorage.getItem('my-project-budget')) || 500)

  return (
    <div className="App">
      <Navbar setMenu={setMenu} />
      <Menu id={menu} setData={setData} data={data} budget={budget} setBudget={setBudget} />
    </div>
  );
}
export default App;
