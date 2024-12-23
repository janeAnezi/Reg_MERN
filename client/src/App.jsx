import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import SignUp from "./Component/SignUp"
import Login from './Component/Login'
import Home from './Component/Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/register' element={<SignUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
