import { TasksProps } from '../App' // Importing the type definition for tasks
import { Task } from './Tasks' // Importing the Task component
import style from '../styles/TaskList.module.css' // Importing CSS module for styling the TaskList component
import clipboard from '../assets/clipboard.png' // Importing an image for the empty task list state

// Props interface
interface Props {
    tasks: TasksProps[]; // Array of tasks
    onDelete: (taskid: string) => void; // Function to handle task deletion
    onComplete: (taskid: string) => void; // Function to handle task completion
}

// Component: List
// Objective: Displays the list of tasks and their status
// What was used: Props for tasks, delete, and complete handlers
// Result: Renders the task list, task statistics, and an empty state if no tasks exist
export function List({ tasks, onDelete, onComplete }: Props) {

    // Variable: taskAmount
    // Objective: Stores the total number of tasks
    const taskAmount = tasks.length;

    // Variable: completedTasks
    // Objective: Stores the count of completed tasks
    const completedTasks = tasks.filter((task) => task.completed).length;

    return (
        // HTML: Section containing the task list
        <section className={style.task}>
            {/* HTML: Header displaying task statistics */}
            <header className={style.header}>
                <div>
                    {/* HTML: Total number of created tasks */}
                    <p>Created tasks</p>
                    <span>{taskAmount}</span>
                </div>
                <div>
                    {/* HTML: Number of completed tasks */}
                    <p className={style.taskConcluded}>Concluded</p>
                    <span>{completedTasks} de {taskAmount}</span>
                </div>
            </header>
            {/* HTML: List of tasks */}
            <div className={style.list}>
                {tasks.map((task) => (
                    <Task 
                        task={task} // Passing task data to the Task component
                        key={task.id} // Unique key for each task
                        onDelete={onDelete} // Delete handler
                        onComplete={onComplete} // Complete handler
                    />
                ))}

                {/* HTML: Empty state when no tasks are available */}
                {tasks.length <= 0 && (
                    <section className={style.empty}>
                        {/* HTML: Image for the empty state */}
                        <img src={clipboard} />
                        <div>
                            <p>
                                You don't have tasks registered yet                           
                            </p>
                            <span>
                                Create tasks and organize your to-do items
                            </span>
                        </div>
                    </section>
                )}
            </div>
        </section>
    )
}