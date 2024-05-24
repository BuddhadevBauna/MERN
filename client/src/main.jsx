import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthPrvider } from './store/auth.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthPrvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthPrvider>
)
