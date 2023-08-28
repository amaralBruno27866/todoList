import './global.css'
import style from './App.module.css'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { Task } from './components/Task'

export function App() {
  return (
    <div>
      <Header />
      <div className={style.wrapper}>
        <Input />
        <Task />
      </div>
    </div>
  )
}
