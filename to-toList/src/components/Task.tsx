import style from '../styles/Task.module.css'
import clipboard from '../assets/clipboard.png'

export function Task() {
    return (
        <div className={style.task}>
            <div className={style.taskHeader}>
                <div className={style.createdTasks}>
                    <p>Created tasks</p>
                    <button>
                        0
                    </button>
                </div>
                <div className={style.concludedTasks}>
                    <p>Concluded</p>
                    <button>
                        0
                    </button>
                </div>
            </div>
            <div className={style.taskContent}>
                <div className={style.empty}>
                    <img src={clipboard} alt="Clipboard Icon" />
                    <span>
                        <p className={style.line1}>
                            You don't have tasks registered yet
                        </p>
                        <p className={style.line2}>
                            Create tasks and organize your to-do items
                        </p>
                    </span>
                </div>
            </div>
        </div>
    )
}
