import style from '../styles/Input.module.css'
import {PlusCircle} from 'phosphor-react'

export function Input() {
    return (
        <div className={style.inputContainer}>
            <div className={style.inputContent}>
                <input type="text" placeholder='Add a new task' />
                <button>
                    Create
                    <span className={style.plusCircle}><PlusCircle size={20}/></span>
                </button>
            </div>
        </div>
    );
}