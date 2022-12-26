import './App.css'
import Sidebar from './components/Sidebar/Sidebar';
import MainDash from './components/MainDash/MainDash';

function App() {
  return (
    <div className="App">
        <div className='AppGlass'>
          <Sidebar/>
          <MainDash/>
          <div></div>
        </div>
    </div>
  );
}

export default App;
