import React from 'react'
import { Datacontext } from '../../context/task'
import { useContext } from 'react'

const Admintasklist = () => {
  const {AdminList}=useContext(Datacontext);
  const {user}=useContext(Datacontext);
  
console.log(AdminList)
  return  <div className='mt-5 h-full overflow-y-auto'>
    {
AdminList[user.index].asignTasks.map((task)=>{
return <div key={task.description} className='flex mb-2 flex-row justify-between p-2 border border-black'><h4>{task.asignTo}</h4><h4>{task.title}</h4><h4>{task.status}</h4></div>

})
}
</div>
  
  
}

export default Admintasklist
