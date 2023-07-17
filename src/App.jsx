import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Search } from "./pages";
import { Index } from "./pages";
import "./App.css";
import SearchResult from "./pages/SearchResult/SearchResult";
import Login from "./pages/Login/Login";
import Register from "./pages/Register";
import Pembayaran from "./pages/Pembayaran/Pembayaran";
import DetailCar from "./pages/DetailCar/DetailCar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/search-result",
    element: <SearchResult />,
  },
  {
    path: "/detail-car/:id",
    element: <DetailCar />,
  },
  {
    path: "/pembayaran/:id",
    element: <Pembayaran />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
