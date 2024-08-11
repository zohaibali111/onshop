import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Error from "./pages/error";
import Movie from "./pages/movie";
import TvSries from "./pages/tv-series";
import Bookmark from "./pages/bookmark";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Movies from "./pages/movie";

export const router = createBrowserRouter([
{
    path: "/",
    element: <Home />,
    errorElement: <Error />,

},
{
    path: "/movies",
    element: <Movies />,
    errorElement: <Error />,

},
{
    path: "/tv-series",
    element: <TvSries />,
    errorElement: <Error />,

},
{
    path: "/bookmarks",
    element: <Bookmark />,
    errorElement: <Error />,

},

{
    path: "/login",
    element: <Login />,
    errorElement: <Error />,

},

{
    path: "/register",
    element: <Register/>,
    errorElement: <Error />,

},

{
    path: "/reset-password",
    element: <ForgotPassword/>,
    errorElement: <Error />,

},



])