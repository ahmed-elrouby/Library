import React, { Component } from 'react'
import axios from 'axios'
export default class LibraryC extends Component {
    state={
        books:[],
    }
    getbook=()=>
    {
        axios.get('https://jsonplaceholder.typicode.com/posts/').then((res)=>{this.setState({books:res.data})}).catch((error)=>{alert(error)})
    }
    componentDidMount()
    {
        this.getbook();
    }
  render() {
    return (
      <div>
          <h1>Library Class</h1>
          {this.state.books.map((element,index)=>{return <h1 key={index} style={{color:'blue',backgroundColor:'gray',padding:'10px',margin:'2.5px'}}>{index} {element.title}</h1> })}
      </div>
    )
  }
}
