import React from 'react'
import Header from '../Header'
import CreateTask from './CreateTask'
import Admintasklist from './Admintasklist'

const Admin = () => {
  return (
    <div className="min-h-screen w-full px-5  ">
      <Header/>
       <CreateTask/>
       <Admintasklist/>
      </div>
   
  
  )
}

export default Admin
