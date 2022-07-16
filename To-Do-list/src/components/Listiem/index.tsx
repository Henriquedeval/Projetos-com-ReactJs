import * as C from"./style"
import {Item} from "../../Types/item"
import { useState } from "react"
type props={
    item:Item
}


export const ListItem=({item}:props)=>{

    const [isChecked,setChecked]= useState(item.done)
    
    return(
     <C.Container done={isChecked}>
       <input type="checkbox" checked={isChecked}
       onChange={e=>setChecked(e.target.checked)}
       />
       <label>{item.name}</label>
     </C.Container>
    )

    
}

