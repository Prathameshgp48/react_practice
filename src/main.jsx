import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextProvider from './components/UseContext/Context/AppContext.jsx'

createRoot(document.getElementById('root')).render(
    <ContextProvider>
        <App />
    </ContextProvider>
)

//StrictMode is additional runtime check in dev env to ensure that your app is safe
