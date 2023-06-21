import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Search } from "./pages";
import { Index } from "./pages";
import "./App.css";
import SearchResult from "./pages/SearchResult/SearchResult";
import DetailCar from "./pages/DetailCar/DetailCar";
import Login from "./pages/Login/Login";
import Register from "./pages/Register";
<<<<<<< HEAD
import Pembayaran from "./pages/Pembayaran/Pembayaran";
=======
import Ticket from "./pages/E-ticket/ticket";
>>>>>>> 7472b44b53e03acc6eae740cab25fbc578045ec0

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
    path: "/pembayaran",
    element: <Pembayaran />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/ticket",
    element: <Ticket />,
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
