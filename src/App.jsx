import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Search } from "./pages";
import { Index } from "./pages";
import SearchResult from "./pages/SearchResult/SearchResult";
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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
