import React, { Suspense, lazy } from "react";
import { BrowserRouter,createBrowserRouter,Route,RouterProvider,Routes } from "react-router-dom"
const  HomePage = lazy(()=> import("./pages/HomePage"));
import MainLayout from "./layouts/MainLayout";
import BlogPage from "./pages/BlogPage";

// Loading component
const LoadingSpinner = () => (
  <div className="loading-spinner">
    <div className="spinner"></div>
    <p>Loading...</p>
  </div>
);

const  SuspenseWrapper = ({children})=>{
   return <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
}

const router = createBrowserRouter([
  {
    path:'/',
    element: <MainLayout />,
    children:[
      {index:true ,element:<SuspenseWrapper><HomePage /></SuspenseWrapper>},
      {path:'/blog' ,element:<SuspenseWrapper><BlogPage /></SuspenseWrapper>},
      {path:'/blog/:id' ,element:<SuspenseWrapper><BlogPage /></SuspenseWrapper>},

    ]
  }
])




function App() {
  
 

  return (
    <>
   <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
