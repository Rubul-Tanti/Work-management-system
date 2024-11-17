import React from 'react'
import  { useState } from 'react'
import { useContext } from 'react'
import { Datacontext } from '../../context/task'

const Failed = () => {

  
  const {user}=useContext(Datacontext)
  const {setuser}=useContext(Datacontext)
const {Employdata}=useContext(Datacontext)
const {dispatchEmploydata}=useContext(Datacontext)

  return (
    <div id='newtask' className='pt-14'>
    <a className='text-2xl  font-semibold mb-2 text-white bg-black rounded-t-3xl p-2 '>Failed</a>
    <div id='tasklist'  className=' w-full h-60 lg:h-72 overflow-x-auto gap-5 mt-5 border p-2  flex-row-reverse flex flex-shrink-0 flex-nowrap'>
    {  Employdata[user.index].tasks.map((task)=>{
      if(task.failed){
        
        return <div key={task.title} className=" h-[90%] overflow-hidden w-[230px] lg:w-[300px] flex-shrink-0 border shadow-sm shadow-gray-300 text-white font-bold rounded-xl ">
    <div className="flex flex-row bg-black text-white justify-between pt-2 px-5">
      <h5></h5><h6 className=''>{task.date}</h6>
    </div>
    <h2 className='lg:p-2 p-1 bg-black text-lg lg:text-2xl'>{task.title}</h2>
    <h3 className='pt-3  px-2 text-black text-sm font-normal'>{task.description}</h3>
    
    </div>
    }
    })
    }
         
        </div>
    </div>
    
  )
}

export default Failed
