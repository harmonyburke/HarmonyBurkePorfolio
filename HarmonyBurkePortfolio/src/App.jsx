import { useState } from 'react'

import './App.css'
import {Nav, Portfolio, About, Contact} from './components';


function App() {
  const currentPage= useState('About')
  
  const renderHome= () =>{
    if (currentPage===Portfolio){
      return <Portfolio/>
    }else if (currentPage===Contact){
      return <Contact/>
    }else {
      return <About/>
    }
  }

  
  return (
    <>
      <div>
        <Nav />
        
      </div>
      
      <div className="App">
        <h1></h1>
        {renderHome()}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
