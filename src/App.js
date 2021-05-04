import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'
import AddTask from './components/AddTask'

function App() {

  const[tasks, setTasks] = useState([
  {
    id:1,
    text:'Doctors Appointment',
    day:'feb 5th at 2:30pm',
    reminder:true
  },
  {
    id:2,
    text:'Meeting at school',
    day:'feb 6th at 230pm',
    reminder:true
  },
  {
    id:3,
    text:'Food shopping',
    day:'feb 5th at 230pm',
    reminder:false
  },
])

//delete task
const deleteTask = (id) => {
  setTasks( tasks.filter((task) => task.id !== id ))
}
// toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) =>
      task.id === id ? 
      {...task, reminder: !task.reminder}:
      task))
}
// add task
const addTask = (task) => {
  const id = Math.floor(Math.random()*1000) +1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}
  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask}/>
    { tasks.length >0 ? 
      (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />):
      ('No Taks to show')
    }  
    </div>
  );
}

export default App;
