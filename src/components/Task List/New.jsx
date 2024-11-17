import React, { useState } from 'react'
import { Datacontext } from '../../context/task'
import { useContext } from 'react'

const NewTask = () => {
  const {user}=useContext(Datacontext)
  const {setuser}=useContext(Datacontext)
  const {Employdata}=useContext(Datacontext)
  const {AdminList}=useContext(Datacontext)
  const {dispatchAdminList}=useContext(Datacontext)
  const {dispatchEmployData}=useContext(Datacontext)
  

function activeTask(index){
Employdata[user.index].tasks[index].newTask=false;
Employdata[user.index].tasks[index].active=true;
Employdata[user.index].tasks[index].failed=false;
Employdata[user.index].tasks[index].completed=false;

AdminList.map((admin)=>{
admin.asignTasks.map((task)=>{
  if(task.description===Employdata[user.index].tasks[index].description){
    task.status='Active'
  }
  
})

})

dispatchAdminList(AdminList)

  setuser({current:Employdata[user.index],index:user.index})
  dispatchEmployData(Employdata)


}
console.log(Employdata[1])

  return (
    
    <div  id='newtask'>
<a className='text-2xl  font-semibold mb-2 text-white bg-red-500 rounded-full p-2 '>New Tasks</a>
<div id='tasklist'  className=' w-full h-72 overflow-x-auto gap-5 mt-5  border p-2  flex-row-reverse flex flex-shrink-0 flex-nowrap'>

{ Employdata[user.index].tasks.map((task,index)=>{
  if(task.newTask ){
  
    return <div key={task.title}  className="  relative h-[95%] overflow-hidden w-[300px] flex-shrink-0 border shadow-sm shadow-gray-300 text-white font-bold rounded-xl "><a className='absolute left-1  rounded-full text-green-500 bg-white text-lg p-1 border shadow-sm bottom-1 shadow-gray-400 cursor-pointer' onClick={()=>{activeTask(index)}}>Start working </a>
<div className="flex flex-row bg-red-500 text-white justify-between pt-2 px-5">
  <h5></h5><h6 className=''>{task.date}</h6>
</div>
<h2 className='pt-2 pb-2 px-2 bg-red-500  text-2xl'>{task.title}</h2>
<h3 className='pt-3  px-2 text-black text-sm font-normal'>{task.description}</h3>

</div>
}
})
}
   </div>
</div>

  )
}

export default NewTask
