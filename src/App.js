import './App.css';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Calender from './Components/Calender/Calender';
import Header from './Components/Header/Header';
import TodoList from './Components/TodoList/TodoList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CompleteTAsk from './Components/CompleteTask/CompleteTAsk';

//import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
       
        <Route path="/todo" element={<TodoList></TodoList>}></Route>
        <Route path="completeTask" element={<CompleteTAsk></CompleteTAsk>}></Route>
        <Route path="/calender" element={<Calender />} />
        
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
