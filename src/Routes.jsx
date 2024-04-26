import ErrorPage from "./ErrorPage.jsx";
import Cart from "./Cart/Cart.jsx";
import { ProductPage } from "./Products/Products.jsx";
import { Product } from "./Products/Products.jsx";
import Home from "./Home/Home.jsx";

const routes = [
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/cart",
      element: <Cart />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/products/:name",
      element: <ProductPage />,
      errorElement: <ErrorPage />,
    }
  ];

export default routes;