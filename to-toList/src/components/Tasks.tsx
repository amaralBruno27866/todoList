import style from '../styles/Tasks.module.css'
import { TbTrash } from 'react-icons/tb'
import { BsFillCheckCircleFill} from 'react-icons/bs'
import { TasksProps } from '../App'

interface Props{
    task:TasksProps;
    onDelete: (taskid: string) => void;
    onComplete: (taskid: string) => void;
}

export function Task({task, onDelete, onComplete}:Props){

    return(
        <div className={style.task}>
            <button 
                className = {style.checkButton}
                onClick = {() => onComplete(task.id)}
            >
                {task.completed ? <BsFillCheckCircleFill /> : <div />}
            </button>
            <p className={task.completed ? style.taskCompleted : ""}>
                {task.content}
            </p>
            <button 
                className={style.deleteButton} 
                onClick={() => onDelete(task.id)}>
                <TbTrash size={20} />
            </button>
        </div>
    )
}