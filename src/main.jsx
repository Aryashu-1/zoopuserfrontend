import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserStore from './Stores/UserStore/UserStore.jsx'
import StoresStore from './Stores/StoresStore/StoresStore.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserStore>
    <StoresStore>
      <App />
    </StoresStore>
    </UserStore>
    
  </React.StrictMode>,
)
