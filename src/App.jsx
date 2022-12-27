import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {


  return (
    <div className="App">
    <h1>parent component</h1>

    <ChildComponent data={"sidebardata"}>
    <h1>my name is Akib Ali</h1>
    <h2>I am a software engineer</h2>
      
    </ChildComponent>

    </div>
  )
}

export default App


function ChildComponent(props){


  return(
    <div style={{color:"red"}}>
      <h1>Child Component</h1>
      {props.children}
    </div>
  )
}
