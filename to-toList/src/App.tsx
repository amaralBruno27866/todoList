import './global.css'
import style from './App.module.css'
import { Header } from './components/Header'
import { Input } from './components/Input'
import {List} from './components/TaskList'

export function App() {
  return (  
    <div className={style.wrapper}>
      <Header />
      <Input />
      <List />
    </div>
  )
}
