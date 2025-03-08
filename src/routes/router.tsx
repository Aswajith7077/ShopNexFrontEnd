import Home from "@/pages/Home";
import Login from "@/pages/Login";
import SignIn from "@/pages/SignIn";
import { createBrowserRouter } from "react-router-dom";



const router = createBrowserRouter([
    {
        path:"/login",
        element:<Login />
    },
    {
        path:"/signin",
        element:<SignIn />
    },
    {
        path:"/home",
        element:<Home />
    }
]);

export default router;