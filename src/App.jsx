import './app.css'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTask, toggleTask, allSelect, addTask } from './store/modules/taskStore'
import { useState } from 'react'
import uuid from 'react-uuid'

function App() {
  // 使用redux数据
  const { list } = useSelector(state => state.taskStore)

  // 得到dispatch方法  修改数据
  const dispatch = useDispatch()

  // 删除
  const delTask = (id) => {
    // console.log(id)
    const action = deleteTask(id)
    dispatch(action)
  }

  // 切换单选状态
  const tolTask = (id) => {
    const action = toggleTask(id)
    dispatch(action)
  }

  // 切换全选状态
  const allChange = (e) => {
    // console.log(e)
    const action = allSelect(e)
    dispatch(action)
  }

  // 新增 受控表单
  const [taskValue, setTaskValue] = useState('')
  const addNewTask = (e) => {
    // console.log(e)
    if (e.keyCode === 13 && taskValue !== '') {
      const action = addTask({
        id: uuid(),
        title: taskValue,
        done: false
      })
      dispatch(action)
      setTaskValue('') // 添加完后清空输入框
    }
  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>redux-todos</h1>
        <input
          className="new-todo"
          autoFocus
          autoComplete="off"
          placeholder="What needs to be done?"
          value={taskValue}
          onChange={(e) => setTaskValue(e.target.value)}
          onKeyUp={addNewTask}
        />
      </header>
      <section className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          checked={list.every(item => item.done)}
          onChange={(e) => allChange(e.target.checked)}
        />
        <label htmlFor="toggle-all"></label>
        <ul className="todo-list">
          {
            list.map(item => (
              <li key={item.id} className={item.done ? 'todo completed' : 'todo'}>
                <div className='view'>
                <input className="toggle" type="checkbox" checked={item.done} onChange={() => tolTask(item.id)}/>
                <label>{item.title}</label>
                <button className="destroy" onClick={() => delTask(item.id)}></button>
                </div>
              </li>
            ))
          }
        </ul>
      </section>
    </section>
  )
}

export default App

// 渲染列表
// 1. 在组件中通过核心方法 useSelector方法使用数据
// 2. 使用map方法进行列表遍历

// 实现删除
// 1. 在store的reducers选项中定义修改数据的方法 然后导出
// 2. 在组件中通过dispatch函数触发方法的执行并传入id参数

// 切换单选状态
// 1. 在reducers选项中创建切换状态的函数，内部通过传入的id找到要修改的项 进行取反
// 2. 组件中通过dispatch函数触发并传入id

// 切换全选状态 done字段的值始终和当前全选框的状态决定
// 1. 在store中的reducers函数中定义修改数据的action函数控制done字段的变化
// 2. 导出相应的action函数 供组件使用
// 3. 组件中通过 checked属性控制是否全选的UI显示，在change事件中触发action

// 新增实现
// 1. 在redux中定义新增的方法 addTask
// 2. 在组件中通过受控的方式 记录输入框中的数据
// 3. keyUp事件中判断当前是否点击的是enter[keyCode为13]  如果是通过dispatch执行修改
// 使用react-uuid