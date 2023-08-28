import style from '../styles/Body.module.css'
import plus from '../assets/plus.png'

export function Body(){
    return(
        <div className={style.body}>
            <div className={style.content}>
                <input type="text" placeholder='Add a new task' />
                <button>
                    Create <img src={plus} alt='button plus' />
                </button>
            </div>
        </div>
    );
}