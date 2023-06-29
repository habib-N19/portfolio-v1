import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <h3>Error</h3>,
    children: [{}]
  }
])

export default router
