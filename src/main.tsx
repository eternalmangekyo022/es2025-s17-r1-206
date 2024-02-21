import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.tsx'
import About from './routes/About.tsx'
import Contact from './routes/Contact.tsx'
import NotFound from './routes/NotFound.tsx'
import Wrapper from './components/Wrapper.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './components/styles/style.scss'
import './mobile.style.scss'

// import styles, routing, component, routes, and necessary react utilities

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '*',
    element: <NotFound />
  }
].map(({ path, element }) => ({ path, element: <Wrapper value={element}/> })))
//mapping through each object to wrap the obj.element in the header

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);