import logo from './logo.svg';
import './App.css';
import Viewdata from './Components/Viewdata';
import Appbar from './Components/Appbar';
import { Route, Routes } from 'react-router-dom';
import AddData from './Components/AddData';

function App() {
  return (
    <div className="App">
      {/* <Viewdata/> */}
      <Appbar/>
      <Routes>
      
          <Route path='/' element={<Viewdata />} /> 
          <Route path='/add' element={<AddData />} />

      
      </Routes>
    </div>
  );
}

export default App;
