import { useEffect, useState } from 'react'; // Importing React hooks
import style from './App.module.css' // Importing CSS module for styling the App component
import { Header } from './components/Header' // Importing the Header component
import { List } from './components/TaskList' // Importing the TaskList component

const LOCAL_STORAGE_KEY = "todoSave"; // Key for saving tasks in localStorage

// Interface: TasksProps
// Objective: Defines the structure of a task object
// What was used: id (string), content (string), completed (boolean)
// Result: Provides a type definition for tasks
export interface TasksProps {
  id: string;
  content: string;
  completed: boolean;
}

// Component: App
// Objective: Main application component that manages tasks and renders the UI
// What was used: React state, localStorage, and child components
// Result: Displays the task management interface and handles task operations
export function App() {

  // State: tasks
  // Objective: Stores the list of tasks
  const [tasks, setTasks] = useState<TasksProps[]>([]);

  // Function: loadTasks
  // Objective: Loads tasks from localStorage
  // What was used: localStorage.getItem
  // Result: Sets the tasks state with saved tasks
  function loadTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }

  // Effect: useEffect
  // Objective: Loads tasks when the component mounts
  // What was used: React useEffect hook
  // Result: Initializes the tasks state with saved data
  useEffect(() => {
    loadTasks();
  }, []);

  // Function: saveTasks
  // Objective: Saves tasks to localStorage and updates the state
  // What was used: localStorage.setItem
  // Result: Persists the tasks and updates the UI
  function saveTasks(newTasks: TasksProps[]) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  // Function: handleCreateNewTask
  // Objective: Adds a new task to the list
  // What was used: crypto.randomUUID for unique IDs
  // Result: Updates the tasks state with the new task
  function handleCreateNewTask(taskContent: string) {
    saveTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        content: taskContent,
        completed: false
      }
    ]);
  }

  // Function: delTaskById
  // Objective: Deletes a task by its ID
  // What was used: Array filter method
  // Result: Removes the task from the tasks state
  function delTaskById(taskid: string) {
    const newTasks = tasks.filter((task) => task.id !== taskid);
    saveTasks(newTasks);
  }

  // Function: completeMarkTaskById
  // Objective: Toggles the completion status of a task by its ID
  // What was used: Array map method
  // Result: Updates the task's completed status
  function completeMarkTaskById(taskid: string) {
    const newTasks = tasks.map(task => {
      if (task.id === taskid) {
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
    // HTML: Main wrapper for the application
    <div className={style.wrapper}>
      {/* HTML: Header component for adding new tasks */}
      <Header whenAddNewTask={handleCreateNewTask} />
      {/* HTML: TaskList component for displaying tasks */}
      <List 
        tasks={tasks} 
        onDelete={delTaskById}
        onComplete={completeMarkTaskById}
      />
    </div>
  )
}