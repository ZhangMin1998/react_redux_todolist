import { createSlice } from '@reduxjs/toolkit'

const taskStore = createSlice({
  name: 'task', // 模块名唯一

  // 初始数据
  initialState: {
    list: [{
      id: 1,
      title: '学习react',
      done: true
    },{
      id: 2,
      title: '搞定redux',
      done: false
    }]
  },

  // 修改数据的同步方法
  reducers: {
    // 删除
    deleteTask (state, action) {
      state.list = state.list.filter(item => item.id !== action.payload)
    },
    // 切换
    toggleTask (state, action) {
      const item = state.list.find(item => item.id === action.payload)
      item.done = !item.done
    },
    // 全选
    allSelect (state, action) {
      state.list.forEach(item => item.done === action.payload)
    }
  }
})

// 生成修改数据的方法导出
const { deleteTask, toggleTask, allSelect } = taskStore.actions

const taskReducer = taskStore.reducer

// 导出修改数据的函数
export { deleteTask, toggleTask, allSelect }

// 生成reducer 导出 供index.js做组合模块
export default taskReducer