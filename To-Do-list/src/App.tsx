import * as C from "./App.styles"
  import { useState } from "react"
 import { Item } from "./Types/item"
 import { ListItem } from "./components/Listiem"
 import { Addarea } from "./components/AddArea/index."
const App=()=>{


const [List,setList,]=useState<Item[]>([{
  id:1,name:"CREATE A TASK",done:false},
 
])

const AddTask=(Taskname:string,)=>{

let newlist=[...List]
newlist.push({
id:List.length+1,
name:Taskname,
done:false,

})

setList(newlist)
}
  return(
<>
<C.Container>
<C.Area>
<C.Header>To Do list</C.Header>

<Addarea onEnter={AddTask}></Addarea>

{List.map((item,index)=>(
  <ListItem key={index} item={item}/>
))}
</C.Area>
 
</C.Container>
</>
  )
}

export default App