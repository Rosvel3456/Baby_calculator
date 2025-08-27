import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import FemalePage from './pages/MalePage'
import MalePage from './pages/FemalePage'
function App() {
  
  

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' Component={HomePage} />
        <Route path='/male' Component={FemalePage} />
    <Route path='/female' Component={MalePage} />

   </Routes>
   </BrowserRouter>
  )
}

export default App
