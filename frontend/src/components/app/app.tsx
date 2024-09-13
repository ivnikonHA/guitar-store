import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import 'react-toastify/dist/ReactToastify.css';

import Layout from '../layout/layout';
import {
  AddProduct,
  EditProduct,
  Error404,
  LoadingPage,
  Login,
  Product,
  ProductList,
  Register
} from '../../pages/index';
import { loadProductsData } from '../../pages/product-list/loader';
import { AppRoute, RequestStatus } from '../../consts';
import PublicRoute from '../public-route/public-route';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getProductsDataLoadingStatus } from '../../store/products/products-selectors';
import PrivateRoute from '../private-route/private-route';

function App(): JSX.Element {
  const offersDataLoadingStatus = useAppSelector(getProductsDataLoadingStatus);

  if (offersDataLoadingStatus === RequestStatus.Loading) {
    return <LoadingPage />;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route
          path={AppRoute.Root}
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path={AppRoute.ProductList}
          element={
            <PrivateRoute>
              <ProductList />
            </PrivateRoute>
          }
          loader={loadProductsData}
        />
        <Route
          path={AppRoute.ProductId}
          element={
            <PrivateRoute>
              <Product />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Register}
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path={AppRoute.AddProduct}
          element={
            <PrivateRoute>
              <AddProduct />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.EditProduct}
          element={
            <PrivateRoute>
              <EditProduct />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<Error404 />} />
      </Route>
    )
  )
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}

export default App;
