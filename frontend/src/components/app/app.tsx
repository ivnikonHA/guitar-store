import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import Error404 from '../../pages/error-404/error-404';
//import Footer from '../footer/footer';
//import Header from '../header/header';
//import history from '../../history';
import ProductList from '../../pages/product-list/product-list';
import { AppRoute } from '../../consts';
import { HelmetProvider } from 'react-helmet-async';

function App(): JSX.Element {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path={AppRoute.Root}
          element={<ProductList />}
        />
        <Route path='*' element={<Error404 />} />
      </>
    )
  )
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}

export default App;
