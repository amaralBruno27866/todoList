import style from '../styles/Header.module.css'
import logo from '../assets/logo.png'

export function Header() {
    return(
        <header className={style.header}>
            <img src={logo} alt="Application logo" />
        </header>
    ); 
}