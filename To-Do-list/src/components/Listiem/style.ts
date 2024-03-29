import styled from "styled-components";

type ContainerProps={
    done:boolean
}

export const Container=styled.div(({done}:ContainerProps)=>(`
display:flex;
background-color:#20212C;
padding:10px;
border-radius:10px;
margin-bottom:10px;
text-align:center;

input{
   
    width:25px;
    height:25px;
    margin-right:5px;
    outline:0;
    border:0;
}

label {
    color:#CCC;
    text-decoration: ${done ? 'line-through' :'initial'
}
 `))