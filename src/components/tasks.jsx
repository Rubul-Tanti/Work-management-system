
import Active from './Task List/Active'
import Completed from './Task List/Completed'
import Failed from './Task List/failed'
import NewTask from './Task List/New'
const Tasks = () => {

  return (<div>
<NewTask/>
<Active/>
<Completed/>
<Failed/>
</div>
  )
}

export default Tasks
