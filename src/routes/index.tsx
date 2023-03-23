import { createBrowserRouter } from 'react-router-dom'
import { Home, Post } from '@/pages'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  { path: '/issues/:issueId', element: <Post /> },
])
