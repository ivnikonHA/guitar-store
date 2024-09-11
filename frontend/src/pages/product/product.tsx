import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { fetchProductByIdAction } from '../../store/api-actions';
import Error404 from '../error-404/error-404';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getCurrentProduct, getProductDataLoadingStatus } from '../../store/product/product-selectors';
import LoadingPage from '../loading-page/loading-page';
import { BACKEND_URL, UPLOAD_PATH } from '../../consts';
import { useEffect } from 'react';

function Product(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if(id) {
      dispatch(fetchProductByIdAction(id));
    }
  })

  const currentProduct = useAppSelector(getCurrentProduct);
  const isProductDataLoading = useAppSelector(getProductDataLoadingStatus);

  if(isProductDataLoading) {
    return <LoadingPage />
  }

  if(!currentProduct) {
    return <Error404 />
  }

  const {
    name,
    photo,
    article,
    guitarType,
    stringsCount,
    description
  } = currentProduct;
  return (
    <>
      <Helmet>
        <title>Guitar Shop - </title>
      </Helmet>
      <main className="page-content">
        <div className="container">
          <h1 className="page-content__title title title--bigger">Товар</h1>
          <ul className="breadcrumbs page-content__breadcrumbs">
            <li className="breadcrumbs__item">
              <a className="link" href="./main.html">Главная</a>
            </li>
            <li className="breadcrumbs__item">
              <a className="link" href="./main.html">Каталог</a>
            </li>
            <li className="breadcrumbs__item">
              <a className="link">Товар</a>
            </li>
          </ul>
          <div className="product-container">
            <img className="product-container__img" src={`${BACKEND_URL}${UPLOAD_PATH}${photo}`} srcSet="img/content/catalog-product-1@2x.png 2x" width="90" height="235" alt="" />
            <div className="product-container__info-wrapper">
              <h2 className="product-container__title title title--big title--uppercase">{name}</h2>
              <br />
              <br />
              <div className="tabs">
                <a className="button button--medium tabs__button" href="#characteristics">Характеристики</a><a className="button button--black-border button--medium tabs__button" href="#description">Описание</a>
                <div className="tabs__content" id="characteristics">
                  <table className="tabs__table">
                    <tr className="tabs__table-row">
                      <td className="tabs__title">Артикул:</td>
                      <td className="tabs__value">{article}</td>
                    </tr>
                    <tr className="tabs__table-row">
                      <td className="tabs__title">Тип:</td>
                      <td className="tabs__value">{guitarType}</td>
                    </tr>
                    <tr className="tabs__table-row">
                      <td className="tabs__title">Количество струн:</td>
                      <td className="tabs__value">{stringsCount}</td>
                    </tr>
                  </table>
                  <p className="tabs__product-description hidden">{description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Product;
