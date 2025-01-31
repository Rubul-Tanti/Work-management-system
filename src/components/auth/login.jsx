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
 
    
  return (<div className='p-5 h-screen'>
<h1>demo data:employ email id:: alice.johnson@example.com password :: id123 employid:1 </h1>
<h1>demo data:employ email id:: edward.elric@example.com password :: id123 employid:5 </h1>
<h1>demo data:Admin email id:: admin1@example.com password :: Admin123 </h1>
<h1>demo employId ::"1" password:: "1" employId:2 </h1>
    <div className=' w-full flex justify-center pt-20 items-center'>
        <form onSubmit={(event)=>{handleOnSubmit(event)}}>
      <div className="flex flex-col w-[500px] p-20 md:w-[500px]  gap-10 shadow-lg  justify-center items-center shadow-purple-300  rounded-xl border border-purple-100 ">

        <input type="text" ref={Email} placeholder='enter name' className='border w-full outline-none border-purple-400 rounded-md'/>
        <input ref={Password}  type ="password" placeholder='enter password'className='outline-none border w-full border-purple-400 rounded-md' />
        <button className='border rounded-md font-semibold text-purple-500 border-purple-400 w-1/2'> login</button>
      </div>
        </form>
      
    </div>
  </div>
  )
}

export default login
