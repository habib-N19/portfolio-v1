import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'
import Home from '../pages/Home/Home/Home'
import Contact from '../pages/Contact/Contact'
import Blog from '../pages/Blog/Blog'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <h3>Error</h3>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/blog',
        element: <Blog />
      }
    ]
  }
])

export default router
