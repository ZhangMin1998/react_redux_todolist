import { configureStore } from "@reduxjs/toolkit"

import taskReducer from "./modules/taskStore"

export default configureStore({
  reducer: {
    // 注册子模块
    taskStore: taskReducer
  }
})