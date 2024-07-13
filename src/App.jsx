import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Search from "./pages/Search";
import Favourite from "./pages/Favourite";
import SingleGif from "./pages/SingleGif";
import GifProvider from "./context/context";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:category",
        element: <Category />,
      },
      {
        path: "/search/:query",
        element: <Search />,
      },
      {
        path: "/favourites",
        element: <Favourite />,
      },
      {
        path: "/:type/:slug",
        element: <SingleGif />,
      },
    ],
  },
]);

function App() {
  return (
    <GifProvider>
      <RouterProvider router={router} />
    </GifProvider>
  );
}

export default App;
