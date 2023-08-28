import style from '../styles/Input.module.css'
import plus from '../assets/plus.png'

export function Input() {
    return (
        <div className={style.inputContainer}>
            <div className={style.inputContent}>
                <input type="text" placeholder='Add a new task' />
                <button>
                    Create <img src={plus} alt='Plus Button' />
                </button>
            </div>
        </div>
    );
}