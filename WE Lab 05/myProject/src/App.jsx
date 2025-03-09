import './App.css'
import Task1 from './task1'
import Task2 from './task2'
import Task3 from './task3'
import Task4 from './task4'

function App() {
  return (
    <div>
      <Task1/>
      <Task2/>
      <Task3 name={"Ausaja"} email={"ausajamohammed@gmail.com"} phone={"03162334145"}/>
      <Task4/>
    </div>
  );
}

export default App
