import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CountdownTimer from './CountdownTimer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Cuenta Regresiva</h1>
      <h2>Tiempo Restante</h2>
    </div>
    <CountdownTimer fecha="2025-03-09T17:00"/>
    <CountdownTimer fecha="2025-02-13T18:40"/>
    <CountdownTimer fecha="2025-01-31T23:59"/>
    <CountdownTimer fecha="2024-12-13T18:40"/>
  </React.StrictMode>,
)
