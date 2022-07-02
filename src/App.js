import './App.css';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Calender from './Components/Calender/Calender';
import Header from './Components/Header/Header';
import TodoList from './Components/TodoList/TodoList';

//import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/todo" element={<TodoList></TodoList>}></Route>
      </Routes>
    </div>
  );
}

export default App;
