import './App.css';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Calender from './Components/Calender/Calender';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calender" element={<Calender />} />
      </Routes>
    </div>
  );
}

export default App;
