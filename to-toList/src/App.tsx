import { Header } from './components/Header'
import { Body } from './components/Body'
import style from './App.module.css'
import './global.css'


export function App() {
  return (
    <div>
      <Header />
      <div className={style.wrapper}>
        <Body />
      </div>
    </div>
  )
}
