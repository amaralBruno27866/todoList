import { useEffect, useState } from 'react';
import style from './App.module.css'
import { Header } from './components/Header'
import { List } from './components/TaskList'

const LOCAL_STORAGE_KEY = "todoSave";

export interface TasksProps{
  id: string;
  content: string;
  completed: boolean;
}

export function App() {

  const [tasks, setTasks] = useState<TasksProps[]>([]);

  function loadTasks(){
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(saved){
      setTasks(JSON.parse(saved));
    }
  }

  useEffect(() => {
    loadTasks();
  }, []);

  function saveTasks(newTasks: TasksProps[]){
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  function handleCreateNewTask(taskContent: string){
    saveTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        content: taskContent,
        completed: false
      }
    ]);
  }

  function delTaskById(taskid: string){
    const newTasks = tasks.filter((task)=>task.id !== taskid);
    saveTasks(newTasks);
  }

  function completeMarkTaskById(taskid: string){
    const newTasks = tasks.map(task => {
      if(task.id === taskid){
        return {
          ...task,
          completed: !task.completed,
        }
      }
      return task;
    });
    saveTasks(newTasks);
  }

  return (  
    <div className={style.wrapper}>
      <Header whenAddNewTask={handleCreateNewTask} />
      <List 
        tasks={tasks} 
        onDelete={delTaskById}
        onComplete={completeMarkTaskById}
      />
    </div>
  )
}
