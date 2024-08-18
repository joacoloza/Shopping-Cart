import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import Cart from './Cart.jsx';
import { ProducProvider } from './product/ProductContext.jsx';
import './index.css'


const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
  },
  {
    path:"cart",
    element:<Cart/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProducProvider>
      <RouterProvider router={router}/>
    </ProducProvider>
  </StrictMode>,
)
