import { createContext, useContext, useEffect, useReducer, useState } from "react"
import{Adminlist, Employelist} from"../utilites/localstorage"

export const Datacontext = createContext({
  handleOnLogin:()=>{},Employdata:[], user:{},setuser:()=>{},currentDashboard:{},setCurrentDashboard:()=>{},asignTask:()=>{}
})

function Employdatareducer(current,action){
  let newtask=current;
  localStorage.setItem('newemploy',JSON.stringify(newtask))
  return newtask
}

const Adminreducer=(current,action)=>{
  let newtask=current;
  
  localStorage.setItem('admin',JSON.stringify(newtask))
  return newtask}
  
  function DataStorage({children}){
    
    const Admin=JSON.parse(localStorage.getItem('admin'))
    const Employ=JSON.parse(localStorage.getItem('newemploy'))
   console.log(Employ,Admin)

   
   const [Employdata,dispatchEmployData]= useReducer(Employdatareducer,Employ?Employ:Employelist)
   const[AdminList,dispatchAdminList]=useReducer(Adminreducer,Admin?Admin:Adminlist)

const [user, setuser] = useState(false)
const [currentDashboard,setCurrentDashboard]=useState(false)
  useEffect(()=>{
    const currentuser=JSON.parse(localStorage.getItem('current'))
    const dash=JSON.parse(localStorage.getItem('dashboared'))
    setuser(currentuser)
    setCurrentDashboard(dash)
    console.log(currentuser,dash)},[])

const handleOnLogin=(email,password)=>{
  let matched;
  let user;
  Employdata.map((current,index)=>{
    if(current.email===email&&current.password===password){
      const data ={index,current}
      localStorage.setItem('current',JSON.stringify(data))
      localStorage.setItem('dashboared',JSON.stringify('E'))
    user=data
      setCurrentDashboard("E")
  
      matched=true;
    }else{matched=false;}
  })
  AdminList.map((current,index)=>{
    if(current.email===email&&current.password===password){
      const data={index,current}
      localStorage.setItem('current',JSON.stringify(data))
      localStorage.setItem('dashboared',JSON.stringify('A'))  
    user=data
      setCurrentDashboard("A")}
      matched=true;
    })
    !matched&&alert("wrong credentials")
    
    setuser(user)
  }
  


  return <Datacontext.Provider value={{Employdata,AdminList,dispatchAdminList, user,setuser,handleOnLogin,currentDashboard,setCurrentDashboard,dispatchEmployData}}>
{children}

</Datacontext.Provider>
 }
 export default DataStorage
