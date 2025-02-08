import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DataProvider } from './components/DataProvider/Dataprovider.jsx'
import {initialState,reducer} from './components/Utility/Reducer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider reducer={reducer} initialState={initialState}>
     <App />
    </DataProvider>
   
  </StrictMode>,
)
