import logo from './logo.svg';
import './App.css';
import Container from './components/Container/Container';
import FormCreateTask from './components/FormCreateTask/FormCreateTask';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import TaskEditPage from './pages/TaskEditPage';

function App() {
  const [tasks, setTasks] = useState([
    'Купить молоко',
    'Сделать ДЗ',
    'Оплатить покупки',
    'Ещё одна задача'
  ]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage tasks={tasks} setTasks={setTasks}/>} />
        <Route path='edit-task' element={<TaskEditPage />}/>
        <Route path='*' element={<MainPage tasks={tasks} setTasks={setTasks}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
