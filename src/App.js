import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

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
  return (
    <div className="container">
      <Header />
    { tasks.length >0 ? 
      (<Tasks tasks={tasks} onDelete={deleteTask} />):
      ('No Taks to show')
    }  
    </div>
  );
}

export default App;
