import './app.css'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTask, toggleTask, allSelect } from './store/modules/taskStore'

function App() {
  // 使用redux数据
  const { list } = useSelector(state => state.taskStore)

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          autoFocus
          autoComplete="off"
          placeholder="What needs to be done?"
        />
      </header>
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all"></label>
        <ul className="todo-list">
          {
            list.map(item => (
              <li key={item.id} className={item.done ? 'todo completed' : 'todo'}>
                <div className='view'>
                <input className="toggle" type="checkbox" checked={item.done} />
                <label>{item.title}</label>
                <button className="destroy"></button>
                </div>
              </li>
            ))
          }
          {/* <li className="todo">
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>learn react</label>
              <button className="destroy"></button>
            </div>
          </li>
          <li className="todo completed">
            <div className="view">
              <input className="toggle" type="checkbox" defaultChecked={true} />
              <label>learn react</label>
              <button className="destroy"></button>
            </div>
          </li> */}
        </ul>
      </section>
    </section>
  )
}

export default App
