import { Link, useLocation } from 'react-router-dom';


function NavBar() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs" style={{display:'flex,', justifyContent:'spaceBetween', fontFamily:'amatic', background:'#EED2CC', color:'#A1683A'}}>
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact Me
        </Link>
      </li>
    </ul>
  );
}

export default NavBar;
