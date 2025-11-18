// import { BrowserRouter, Route, Routes } from "react-router";

import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Layout from "./Layout";
import SingleEmployee from "./components/SingleEmployee";
import Todos from "./components/Todos";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "employees/:id",
        element: <SingleEmployee />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "todos", // New route for Todos component
        element: <Todos />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
