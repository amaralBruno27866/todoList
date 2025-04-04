import style from '../styles/Header.module.css' // Importing CSS module for styling the Header component
import logo from '../assets/logo.png' // Importing the application logo
import {AiOutlinePlusCircle} from 'react-icons/ai' // Importing an icon from the React Icons library
import { ChangeEvent, FormEvent, useState } from 'react'; // Importing React hooks and types

// Props interface
interface Props {
    whenAddNewTask: (taskContent: string) => void; // Function to handle adding a new task
}

// Header Component
export function Header({ whenAddNewTask }: Props) {

    // State to manage the content of the input field
    const [content, setContent] = useState("");

    // Function: handleSubmit
    // Objective: Handles the form submission to add a new task
    // What was used: Prevents default form behavior, calls the parent function, and clears the input
    // Result: Adds a new task and resets the input field
    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        whenAddNewTask(content);
        setContent("");
    }

    // Function: onChangeContent
    // Objective: Updates the state with the current value of the input field
    // What was used: Event listener for input changes
    // Result: Keeps the state synchronized with the input field
    function onChangeContent(event: ChangeEvent<HTMLInputElement>) {
        setContent(event.target.value);
    }

    return (
        // HTML: Header section of the application
        <header className={style.header}>
            {/* HTML: Logo of the application */}
            <img src={logo} alt="Application logo" />
            
            {/* HTML: Form to add a new task */}
            <form className={style.newTaskForm} onSubmit={handleSubmit}>
                {/* HTML: Input field for entering a new task */}
                <input 
                    type="text" 
                    placeholder='Add a new task'
                    onChange={onChangeContent}
                    value={content}
                />
                {/* HTML: Button to submit the form */}
                <button>
                    Create
                    <AiOutlinePlusCircle size={20} /> {/* Icon for the button */}
                </button>
            </form>
        </header>
    ); 
}