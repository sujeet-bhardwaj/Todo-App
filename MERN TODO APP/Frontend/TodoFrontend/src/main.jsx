import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import HomePage from './Components/HomePage.jsx';
import EditPage from './Components/EditPage.jsx';
import Adduser from './Components/AddUser.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
        children: [
      { path: '/', element: <HomePage /> },
      { path: '/edit', element: <EditPage /> },
      { path: '/add', element: <Adduser /> },
      { path: '*', element: <div>not found the page</div> },
    ],
  }

]);
createRoot(document.getElementById('root')).render(
<StrictMode>
  <RouterProvider router={router} />
</StrictMode>
)
