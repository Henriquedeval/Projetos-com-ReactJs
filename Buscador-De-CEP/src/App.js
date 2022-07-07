import api from './services/api';
import { useState } from 'react';
import {FiSearch} from'react-icons/fi'
import './Style.css'
function App() {

async function Hsearch(){
if(input===''){
  alert('Digite algum CEP')
  return
}
try{
const response= await api.get(`${input}/json`)
setCep(response.data)
setInput('')
}
catch{
alert("Ops erro ao discar")
setInput('')
}
} 

  const [input,setInput]=useState("")
  const [Cep,setCep]=useState('')
  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>
      <div className="containerinput">
        <input type='text'
        placeholder="Digite seu CEP"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        />
<button className="buttonsearch" onClick={Hsearch}>
<FiSearch size={25} color="#fff"/>
</button>
      </div>
      
{Object.keys(Cep).length  > 0  && (
  
  <main className='main'>
  
  <h2>CEP:{Cep.cep}</h2>
  <span> {Cep.logradouro}</span>
  <span>Complemento:{Cep.complemento}</span>
  <span>Bairro:{Cep.bairro}</span>
  <span>{Cep.localidade} - {Cep.uf}</span>
  </main>
  
  )}
    </div>
  );
}

export default App;
