import style from '../styles/Header.module.css'
import logo from '../assets/Logo.png'

export function Header() {
    return(
        <header className={style.header}>
            <img src={logo} alt="Logo aplication" />
        </header>
    ); 
}