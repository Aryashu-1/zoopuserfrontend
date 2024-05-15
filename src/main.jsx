import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserStore from './Stores/UserStore/UserStore.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserStore>
      <App />
    </UserStore>
    
  </React.StrictMode>,
)
