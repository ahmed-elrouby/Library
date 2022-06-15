import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function LibraryF() {
    const [books,setBooks]=useState([]);
    const getbooks=()=>
    {
        axios.get('https://jsonplaceholder.typicode.com/posts/').then((res)=>{setBooks(res.data)}).catch((error)=>{alert(error)})
    }
    useEffect(()=>{getbooks()},[]);
  return (
    <div>
        <h1>Library Function</h1>
        {books.map((element,index)=>{return <h1 key={index} style={{color:'green',backgroundColor:'wheat',padding:'10px',margin:'2.5px'}}>{index} {element.title}</h1> })}
    </div>
  )
}
