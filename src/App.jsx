import { useContext } from "react"
import Login from "./components/auth/login"
import Admin from "./components/Dashboard/Admin"
import Empoloy from "./components/Dashboard/Empoloy"
import { Datacontext } from "./context/task"

function App(){
const {user}=useContext(Datacontext)
const {currentDashboard}=useContext(Datacontext)

return <> 
 
 {!user&&<Login></Login>}
  {currentDashboard==="E"&&<Empoloy/> }
{currentDashboard==="A"&&<Admin/> }
   
</> 
  
}
export default App