import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/NavBar';
import Portfolio from './components/Portfolio';

function App() {
  const currentPage= useState('Portfolio')
  
  const renderHome= () =>{
    if (currentPage===Portfolio){
      return <Portfolio/>
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
