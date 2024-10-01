import Login from "../Login/Login";
import Home from "../Pages/Home/Home";

import { createBrowserRouter } from "react-router-dom";
import Register from "../Register/Register";
import { Root } from "postcss";
import Layout from "../Layout/Layout";
import NewsDetails from "../Pages/Home/NewsDetails";
import PrivateRoutes from "./PrivateRoutes";
import UserProfile from "../userProfile/UserProfile";
import SingleJob from "../Carrear/SingleJob";
import Carrear from "../Carrear/Carrear";
import About from "../About/About";
import Footer from "../Footer/Footer";




const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout></Layout> ,
      children:[
        {
          path:'/',
          element:<Home></Home>,
          loader:()=>fetch('/data/news.json')

        
        },
        
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/news/:id',
          element:<PrivateRoutes><NewsDetails/></PrivateRoutes>,
        },
        {
          path:'carrear',
          element:<PrivateRoutes><Carrear/></PrivateRoutes>,
        },
        
        {
          path:'user',
          element:<PrivateRoutes><UserProfile></UserProfile></PrivateRoutes>
        },
        {
          path:'about',
          element:<About></About>
        },
        {
          path:'footer',
          element:<Footer></Footer>
        }
      ]
    },
  ]);

  export default router