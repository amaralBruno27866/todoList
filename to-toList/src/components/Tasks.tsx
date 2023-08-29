import style from '../styles/Tasks.module.css'
import {Circle, Trash, CheckCircle} from 'phosphor-react'

interface Task{
    id: number;
    content: string;
    wasCheck: boolean;
}

export function Tasks(){
    return(
        <div className={style.task}>
            <button className={style.circle}>
                <Circle size={20}/>
            </button>
            <textarea>
                Alias nisi iste odio?
            </textarea>
            <button className={style.trash}>
            <Trash size={20} />
            </button>
        </div>
    )
}