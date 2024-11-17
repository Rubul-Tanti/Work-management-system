import React from 'react'
import  { useState } from 'react'
import { useContext } from 'react'
import { Datacontext } from '../../context/task'
const Active = () => {
 const {user}=useContext(Datacontext)
  const {setuser}=useContext(Datacontext)
const {Employdata}=useContext(Datacontext)
const {dispatchEmployData}=useContext(Datacontext)
const {AdminList}=useContext(Datacontext)
const {dispatchAdminList}=useContext(Datacontext)

function handleonclick(index,status){
  Employdata[user.index].tasks[index].newTask=false;
Employdata[user.index].tasks[index].active=false;
Employdata[user.index].tasks[index].failed=(status==='failed')?true:false;
Employdata[user.index].tasks[index].completed=(status==='completed')?true:false;

AdminList.map((admin)=>{
  admin.asignTasks.map((task)=>{
    if(task.description===Employdata[user.index].tasks[index].description){
      task.status=status
    }
    
  })
  
  })


dispatchAdminList(AdminList)

dispatchEmployData(Employdata)
setuser({current:Employdata[user.index],index:user.index})
}



  return (
    <div id='newtask' className='pt-14 '>
<a className='text-2xl  font-semibold mb-2 text-white bg-green-500 rounded-full p-2 '>Active Tasks</a>
<div id='tasklist'  className=' w-full h-72 overflow-x-auto gap-5 mt-5  border p-2 flex-row-reverse flex flex-shrink-0 flex-nowrap'>
{ Employdata[user.index].tasks.map((task,index)=>{
  if(task.active){
    return <div  key={task.title} className=" relative h-[95%] overflow-hidden w-[300px] flex-shrink-0 border shadow-sm shadow-gray-300 text-white font-bold rounded-xl "><div className='flex flex-row absolute let-1  rounded-xl gap-1   bottom-1'>
      <a className='text-yellow-600 border border-yellow-500 bg-white p-1 cursor-pointer rounded-xl' onClick={()=>{handleonclick(index,'completed')}}>Task completed</a>
    <a className='text-black bg-white border shadow-sm shadow-gray-400 p-1 cursor-pointer rounded-xl' onClick={()=>{handleonclick(index,'failed')}}>Task Failed </a></div>
<div className="flex flex-row bg-green-500 text-white justify-between pt-2 px-5">
  <h5></h5><h6 className=''>{task.date}</h6>
</div>
<h2 className='pt-2 pb-2 px-2 bg-green-500  text-2xl'>{task.title}</h2>
<h3 className='pt-3  px-2 text-black text-sm font-normal'>{task.description}</h3>

</div>
}
})
}
     
    </div>
</div>
  )
}

export default Active
