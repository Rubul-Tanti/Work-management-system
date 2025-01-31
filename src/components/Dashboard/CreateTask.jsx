import React from 'react'
import { useContext } from 'react';
import { Datacontext } from '../../context/task';

const CreateTask = () => {
  const{dispatchAdminList}=useContext(Datacontext);
  const{AdminList}=useContext(Datacontext);
  const{Employdata}=useContext(Datacontext);
  const{dispatchEmployData}=useContext(Datacontext);
  const{user}=useContext(Datacontext);
  const{setuser}=useContext(Datacontext);
let employeId;

  function handleOnClick(event){
    let employname;
  event.preventDefault()
employeId=event.target.employeid.value;
const payload={
 title:event.target.title.value,
   description:event.target.description.value,
   active:false,
   completed:false, 
   date:event.target.date.value,
   failed:false,
   newTask:true
  }
Employdata.map((item)=>{
    if(item.id===employeId){item.tasks.push(payload) 
    employname=item.name
  }})
    const Task={
      type:"update",
      payload:Employdata
    }
    const adminpayload ={
      title: event.target.title.value,
      description:event.target.description.value,
      date: event.target.date.value,
      status:'newTask',
      asignTo:employname
      
    }
    
    AdminList[user.index].asignTasks.push(adminpayload)
    const asignTask={
      type:"update"
      ,payload:AdminList
    }
    setuser({current:AdminList[user.index],index:user.index})
    dispatchAdminList(AdminList)
    dispatchEmployData(Employdata)
    event.target.title.value=""
    event.target.employeid.value=""
    event.target.description.value=""
    event.target.date.value=""
  }


  return (
    <div>
      
      <form onSubmit={(event)=>{handleOnClick(event)}} className=' bg-zinc-900 gap-10 justify-between w-full lg:1/2  p-10 flex lg:flex-row flex-col md:flex-row h-full '>
      <div className='flex flex-col  gap-1  w-full lg:w-1/2 rounded-lg'>
<label htmlFor="title " className='text-white' >Task title</label>
<input id='title' placeholder='title' className='placeholder:text-black' type="text"/>
<label htmlFor="date" className='text-white' >Date</label>
<input id='date' type='date' className='placeholder:text-black'></input>
<h3 className='text-white'>asign to</h3>
<input id='employeid' placeholder='id'className='placeholder:text-black'></input>
</div>
        
        <div className='flex flex-col w-full md:w-1/2'>

        <h3 className='text-white'>description</h3>
<textarea id='description' placeholder='description'  className='w-full h-full placeholder:text-black'  > </textarea>

        <button className="rounded-full mt-2 py-2 text-black bg-green-500">create task</button>
    
        </div>
        
        </form>
    </div>
  )
}

export default CreateTask
