import * as C from "./style"
import { useState,KeyboardEvent } from "react"

type props={
    onEnter: (Taskname:string)=>void
}

export const Addarea=({onEnter}:props)=>{
const [inputText,setInputtext]=useState('')

const HandleKeyup=(e:KeyboardEvent)=>{
if(e.code==='Enter' && inputText !=''){
onEnter(inputText)
setInputtext('')
}
}

    return(
        <C.Container>
<div className="Image">➕</div>
<input type='text' placeholder='Add a task'
value={inputText}
onChange={e=>{setInputtext(e.target.value)}}
onKeyUp={HandleKeyup}
/>
        </C.Container>
    )
}