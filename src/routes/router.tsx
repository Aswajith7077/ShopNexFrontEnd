import Cart from "@/components/Cart";
import Dashboard from "@/components/Dashboard";
import NexStore from "@/components/NexStore";
import PaymentHistory from "@/components/PaymentHistory";
import Search from "@/components/search/Search";
import Shipping from "@/components/Shipping";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import ProductsView from "@/pages/ProductsView";
import SignIn from "@/pages/SignIn";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signin",
    element: <SignIn />
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "shipping",
        element: <Shipping />
      },

      {
        path: "payment_history",
        element: <PaymentHistory />
      },
      {
        path: "nex_store",
        element: <NexStore />
      },
      {
        path:"search",
        element:<Search/>
      },
      {
        path:"products_view",
        element:<ProductsView />
      }
    ]
  }
]);

export default router;
