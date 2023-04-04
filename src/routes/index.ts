import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Home
    }
])

export default router;