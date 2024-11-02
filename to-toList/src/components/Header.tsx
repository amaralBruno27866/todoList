import style from '../styles/Header.module.css'
import logo from '../assets/logo.png'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import { ChangeEvent, FormEvent, useState } from 'react';

interface Props{
    whenAddNewTask: (taskContent: string) => void;
}

export function Header({whenAddNewTask}:Props) {

    const [content, setContent] = useState("");

    function handleSubmit(event: FormEvent){
        event.preventDefault();
        whenAddNewTask(content);
        setContent("");
    }

    function onChangeContent(event: ChangeEvent<HTMLInputElement>){
        setContent(event.target.value);
    }

    return(
        <header className={style.header}>
            <img src={logo} alt="Application logo" />
            <form className={style.newTaskForm} onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder='Add a new task'
                    onChange={onChangeContent}
                    value={content}
                />
                <button>
                    Create
                    <AiOutlinePlusCircle size={20}/>
                </button>
            </form>
        </header>
    ); 
}