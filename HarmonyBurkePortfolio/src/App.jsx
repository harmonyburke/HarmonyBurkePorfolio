// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavBar';

function App() {
 
  return (
    <>
      <Nav />
      <main className="mx-3" style={{background:'#E8998D', fontFamily:'amatic'}}>
        <Outlet />
      </main>
      <footer style={{display:'flex', justifyContent:'center'}}>
        <a style={{margin:'20px'}} href='https://github.com/harmonyburke'>Github</a>
        <a style={{margin:'20px'}} href='https://www.linkedin.com/in/harmony-burke-a34878174/'>LinkedIn</a>
      </footer>
    </>
  );
}

export default App;
