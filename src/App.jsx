import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import BlogDetail from './pages/BlogDetail'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'





const App = () => {
  return (
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/login" element={<Login/>}/>
    <Route exact path="/dashboard" element={<Dashboard/>}/>
    <Route exact path="/blogdetail/:id" element={<BlogDetail/>}/>
    </Routes>
  )
}

export default App