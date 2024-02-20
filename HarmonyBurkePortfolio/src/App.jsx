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
    </>
  );
}

export default App;
