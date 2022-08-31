// import logo from './logo.svg';
// import './App.css';
import Nav from './Nav';
import Topsection from './Topsection';
import Sidebar from './Sidebar';
import Table from './Table';

function App() {
  return (
    <div style={{backgroundColor: "#18191D"}}>
      <div className='row'>
        <div className='col-sm-3'>
        <Sidebar />
        </div>
        <div className='col-sm-9'>
       <Nav />
       <Topsection />
       <Table />
        </div>
      </div>
    </div>
  );
}

export default App;