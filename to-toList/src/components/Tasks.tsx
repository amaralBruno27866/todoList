import style from '../styles/Tasks.module.css'
import {Circle, Trash} from 'phosphor-react'

export function Tasks(){
    return(
        <div className={style.task}>
            <span className={style.circle}>
                <Circle size={20}/>
            </span>
            <textarea>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo qui, neque quam, recusandae et voluptates accusantium repellat tenetur velit provident sit id obcaecati iusto quae quibusdam. Alias nisi iste odio?
            </textarea>
            <span className={style.trash}>
                <Trash size={20} />
            </span>
        </div>
    )
}