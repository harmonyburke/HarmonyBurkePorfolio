
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import App from './App.jsx'
import About from './pages/About';
import Contact  from './pages/Contact.jsx';
import Portfolio from './pages/Portfolio.jsx';

const router =createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children:[
      {
        index:true,
        element: <About />
      },
      {
        path: '/Contact',
        element: <Contact />
      },
      {
        path: '/Portfolio',
        element: <Portfolio />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
