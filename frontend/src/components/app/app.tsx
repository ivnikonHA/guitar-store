import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Error404 from '../../pages/error-404/error-404';
import ProductList from '../../pages/product-list/product-list';
import { AppRoute } from '../../consts';
import { HelmetProvider } from 'react-helmet-async';
import Layout from '../layout/layout';
import Login from '../../pages/login/login';
import Register from '../../pages/register/register';
import AddProduct from '../../pages/add-product/add-product';
import EditProduct from '../../pages/edit-product/edit-product';
import Product from '../../pages/product/product';
import PublicRoute from '../public-route/public-route';

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
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
              element={<ProductList />}
            />
            <Route
              path={AppRoute.ProductId}
              element={<Product />}
            />
            <Route
              path={AppRoute.Register}
              element={<Register />}
            />
            <Route
              path={AppRoute.AddProduct}
              element={<AddProduct />}
            />
            <Route
              path={AppRoute.EditProduct}
              element={<EditProduct />}
            />
            <Route path='*' element={<Error404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App;
