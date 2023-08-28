import { Header } from './components/Header'
import style from './App.module.css'
import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <div className={style.wrapper}>
        <h1>Test</h1>
      </div>
    </div>
  )
}
