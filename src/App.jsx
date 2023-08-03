import React, { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import './App.css'
import {UserForm, UserDetails, EditUser} from "./components"

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
      <Routes>
        <Route path='/' element={<UserForm />}/>
        <Route path='/registerd-users' element={<UserDetails />}/>
        <Route path='/edit-users-details/:id' element={<EditUser />}/>
      </Routes>
   </div>
  )
}

export default App
