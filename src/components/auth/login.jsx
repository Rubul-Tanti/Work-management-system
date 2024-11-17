import React, { useContext, useRef } from 'react'
import { Datacontext } from '../../context/task'
const login = () => {

  const {handleOnLogin}= useContext(Datacontext)
  const Email= useRef()
  const Password= useRef()
  function handleOnSubmit(event){
    event.preventDefault()
   handleOnLogin(Email.current.value,Password.current.value);
    
   Password.current.value="";
   Email.current.value="";
  }
 
    
  return (
    <div className='h-screen w-full flex justify-center items-center'>
        <form onSubmit={(event)=>{handleOnSubmit(event)}}>
      <div className="flex flex-col w-[30vw] h-[70vh] gap-10 shadow-lg p-10 justify-center items-center shadow-purple-300  rounded-xl border border-purple-100">

        <input type="text" ref={Email} placeholder='enter name' className='border w-full outline-none border-purple-400 rounded-md'/>
        <input ref={Password}  type ="password" placeholder='enter password'className='outline-none border w-full border-purple-400 rounded-md' />
        <button className='border rounded-md font-semibold text-purple-500 border-purple-400 w-1/2'> login</button>
      </div>
        </form>
      
    </div>
  )
}

export default login
