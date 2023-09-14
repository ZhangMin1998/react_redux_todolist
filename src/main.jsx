import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// 导入store
import store from './store'

// 导入store提供组件Provider
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
