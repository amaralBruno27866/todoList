import style from '../styles/Tasks.module.css' // Importing CSS module for styling the Task component
import { TbTrash } from 'react-icons/tb' // Importing trash icon from React Icons
import { BsFillCheckCircleFill } from 'react-icons/bs' // Importing check-circle icon from React Icons
import { TasksProps } from '../App' // Importing the type definition for tasks

// Props interface
interface Props {
    task: TasksProps; // Single task object
    onDelete: (taskid: string) => void; // Function to handle task deletion
    onComplete: (taskid: string) => void; // Function to handle task completion
}

// Component: Task
// Objective: Displays a single task with options to complete or delete it
// What was used: Props for task data, delete, and complete handlers
// Result: Renders a task with its content, completion status, and action buttons
export function Task({ task, onDelete, onComplete }: Props) {

    return (
        // HTML: Container for a single task
        <div className={style.task}>
            {/* HTML: Button to mark the task as completed */}
            <button 
                className={style.checkButton}
                onClick={() => onComplete(task.id)}
            >
                {/* HTML: Check icon if completed, empty div otherwise */}
                {task.completed ? <BsFillCheckCircleFill /> : <div />}
            </button>
            
            {/* HTML: Task content, styled differently if completed */}
            <p className={task.completed ? style.taskCompleted : ""}>
                {task.content}
            </p>
            
            {/* HTML: Button to delete the task */}
            <button 
                className={style.deleteButton} 
                onClick={() => onDelete(task.id)}
            >
                <TbTrash size={20} /> {/* Trash icon */}
            </button>
        </div>
    )
}