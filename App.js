import React, { lazy ,Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider ,Outlet } from "react-router-dom";
import HeaderComponent from "./src/components/Header";
import Footer from "./src/components/Footer";
import Contact from "./src/components/Contact";
import ErrorPage from "./src/components/ErrorPage";
import RestaurantMenu from "./src/components/RestaurantMenu";
import LoginPage from "./src/components/LoginPage";
import InnerAbout from "./src/components/InnerAbout";
import MartProduct from "./src/components/MartProduct";
import Cart from "./src/components/Cart";
import { CartProvider } from "./src/utils/UpdateCartContext";



const MainSection = lazy(()=>import("./src/components/Body"))
const InstantMart = lazy(()=>import("./src/components/InstantMart"))
const About = lazy(()=>import("./src/components/About"))



// const para2 = <p id="pra1" className="text-xl font-bold">paragraph 2</p>

// const pra = React.createElement(
//     "p",
//     {
//       id: "pra1", className:"text-xl font-bold"
//     },
//     "Pragraph "
//   );

// const heading = React.createElement(
//     "h1",
//     {
//       id: "title1", key:"h1", className:"text-3xl font-bold"
//     },
//     ["Heading 1",pra,para2]

//   );
//   const heading2 = React.createElement(
//     "h2",
//     {
//       id: "title2", key:"h2", className:"text-3xl font-bold"
//     },
//     ["Heading 2",pra,para2]
//   );

// const container = React.createElement(
//   "div",
//   {
//     id: "container", className:"p-4"
//   },
//   [heading, heading2]
// );
// console.log(heading);

//   const title = (
//     "manish"
// )

// function Surname() {
//   return("kumar")
// }

//   const HeaderComponent = function(){
//     return(
//       <div className="text-xl font-bold">Hi {title} {Surname()} {<Surname />}</div>
//   )
//   }

const AppLayout = () => {
  return (
    <>
    
      <HeaderComponent />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/login-page",
    element: <LoginPage />,
    
  },
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/",
        element: <MainSection />,
      },
      {
        path: "/about-us",
        element: <Suspense fallback={<h1 className="text-3xl h-[60vh] flex items-center justify-center text-center flex-col">Loading....</h1>}><About /></Suspense>,
        children:[
          {
            path: "inner-about",
            element: <InnerAbout />,
          },
        ]
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/product/:productId",
        element: <MartProduct />,
      },
      {
        path: "/instantMart",
        element: <Suspense fallback={<h1 className="text-3xl h-[60vh] flex items-center justify-center text-center flex-col">Loading....</h1>}><InstantMart /></Suspense>,
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ]
  }
],
{
  future: {
    v7_skipActionErrorRevalidation: true,
  },
}
)

const root = ReactDOM.createRoot(document.getElementById("root"));
//passing a react element inside the root
//async defer
root.render(<CartProvider><RouterProvider router={appRouter} /></CartProvider>);
