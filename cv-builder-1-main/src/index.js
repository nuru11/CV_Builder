import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/helper.css';
import './styles/index.css';
import './styles/mediaQueries.css';
import App from './App';
import List from "./screens/list"
import ListDetail from "./screens/listDetail"
import Footer from "./Components/Footer";
import Home from "./screens/home";
import UploadPdf from "./screens/uploadpdf"
import ImageUploader from './screens/imageUploader';
import { createBrowserRouter, RouterProvider} from "react-router-dom"


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: "/a",
    element: <App />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: "/list",
    element: <List />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: "/list/:listid",
    element: <ListDetail />
    
  },
  {
    path: "/uploadpdf",
    element: <UploadPdf />
  },
  {
    path: "/imageuploader",
    element: <ImageUploader />
    
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
    <Footer />
     
  </React.StrictMode>
);