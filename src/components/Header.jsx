import React from 'react'
import { Datacontext } from '../context/task'
import { useContext } from 'react'
const Header = () => {
  
  const {user}=useContext(Datacontext)
  const {setuser}=useContext(Datacontext)
  const {setCurrentDashboard}=useContext(Datacontext)
  function Logout(){
    
    localStorage.setItem('current',JSON.stringify(false))
    localStorage.setItem('dashboared',JSON.stringify(false))
  setuser(false);
  setCurrentDashboard(false)
     }
  
  console.log(user)
  return (
    <div className='flex flex-row justify-between  pt-10 pb-5'>
<p className='text-3xl font-bold  '><span className='text-orange-500 '>Hellow! </span>{user.current.name} </p>
      <button onClick={()=>{Logout()}} className="px-3 py-2 text-purple-500 border border-purple-500 font-bold rounded-lg ">Log out</button>
    </div>
  )
}

export default Header