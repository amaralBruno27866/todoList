import { TasksProps } from '../App'
import { Task } from './Tasks'
import style from '../styles/TaskList.module.css'
import clipboard from '../assets/clipboard.png'

interface Props{
    tasks: TasksProps[];
    onDelete: (taskid: string) => void;
    onComplete: (taskid: string) => void;
}

export function List({tasks, onDelete, onComplete}:Props){

    const taskAmount = tasks.length;
    const completedTasks = tasks.filter((task) => task.completed).length;

    return(
        <section className={style.task}>
            <header className={style.header}>
                <div>
                    <p>Created tasks</p>
                    <span>{taskAmount}</span>
                </div>
                <div>
                    <p className={style.taskConcluded}>Concluded</p>
                    <span>{completedTasks} de {taskAmount}</span>
                </div>
            </header>
            <div className={style.list}>
                {tasks.map((task) => (
                    <Task 
                        task = {task}
                        key = {task.id}
                        onDelete = {onDelete}
                        onComplete = {onComplete}
                    />
                ))}

                {tasks.length <= 0 && (
                    <section className={style.empty}>
                        <img src={clipboard}/>
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