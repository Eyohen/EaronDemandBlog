import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import BlogDetail from './pages/BlogDetail'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import PostTable from './pages/PostTable'
import EditPost from './pages/EditPost'
import { UserContextProvider } from './context/UserContext';
import { ProtectedRoute } from './context/protection'
import { HelmetProvider } from 'react-helmet-async'






const App = () => {
  const helmetContext = {};
  return (
    <HelmetProvider  context={helmetContext}>
    <UserContextProvider>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/login" element={<Login/>}/>
    {/* <Route exact path="/dashboard" element={<Dashboard/>}/> */}
    {/* <Route exact path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/> */}
    <Route exact path="/dashboard" element={<Dashboard/>}/>
    <Route exact path="/blogdetail/:id" element={<BlogDetail/>}/>
    <Route exact path="/posttable" element={<PostTable/>}/>
    <Route exact path="/editpost/:id" element={<EditPost/>}/>
    </Routes>
    </UserContextProvider>
      </HelmetProvider>
  )
}

export default App
