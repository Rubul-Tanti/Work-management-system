import React from 'react'
import { useContext } from 'react'
import { Datacontext } from '../context/task'
const Nooftask = () => {
  const {user}=useContext(Datacontext)
  const {Employdata}=useContext(Datacontext)
  let Newtasks=0;
  let completedtask=0;
  let acceptedtask=0;
  let failedtask=0;
  function newtaskcount(){
Employdata[user.index].tasks.map((task)=>{task.newTask&&Newtasks++})
 return Newtasks; }
  function acceptedTaskCount(){
    Employdata[user.index].tasks.map((task)=>{task.active&&acceptedtask++})
 return acceptedtask; }
  function failedTaskCount(){
    Employdata[user.index].tasks.map((task)=>{task.failed&&failedtask++})
 return failedtask; }

  function completedTaskCount(){
    Employdata[user.index].tasks.map((task)=>{task.completed&&completedtask++})
 return completedtask; }
 
  return (
    
    <div className='flex flex-row md:gap-5 gap-2 justify between  sm:mb-4 md:mb-8 text-white font-bold lg:text-3xl md:text-xl  text-center text-sm'>
      <div className=" gap-1  h-24 justify-center items-center flex flex-col bg-red-500 rounded-xl w-1/4"> New Tasks   <span>{ newtaskcount()}</span>  </div>
      <div className=" gap-1 items-center justify-center  bg-yellow-500 flex flex-col rounded-xl w-1/4"> Completed  <span>{completedTaskCount()}</span> </div>
      <div className=" gap-1   bg-green-500 justify-center flex flex-col rounded-xl w-1/4"> Active  <span>{acceptedTaskCount()}</span>   </div>
      <div className=" gap-1   bg-black text-white justify-center rounded-xl w-1/4 flex flex-col"> Failed<span>{failedTaskCount()}</span>  </div>
    </div>
  )
}

export default Nooftask
