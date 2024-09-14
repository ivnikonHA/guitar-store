import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

import { Error404 } from '../index';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getProducts } from '../../store/products/products-selectors';
import { BACKEND_URL, UPLOAD_PATH } from '../../consts';
import { ProductType } from '../../types/product';

function Product(): JSX.Element {
  const { id } = useParams();
  const enum Tab {
    Characteristics = 'Characteristics',
    Description = 'Description'
  };

  const [activeTab, setActiveTab] = useState(Tab.Characteristics);

  const products = useAppSelector(getProducts);
  const currentProduct = products.find((product: ProductType) => product.id === id);

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
        <title>{`Guitar Shop - ${name}`}</title>
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
                <a
                  className={`button ${activeTab === Tab.Characteristics && 'button--black-border'} button--medium tabs__button`}
                  onClick={() => setActiveTab(Tab.Characteristics)}
                >Характеристики</a>
                <a
                  className={`button ${activeTab === Tab.Description && 'button--black-border'} button--medium tabs__button`}
                  onClick={() => setActiveTab(Tab.Description)}
                >Описание</a>
                <div className="tabs__content" id="characteristics">
                  <table className={`tabs__table ${activeTab === Tab.Description && 'hidden'}`}>
                    <tbody>
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
                    </tbody>
                  </table>
                  <p className={`tabs__product-description ${activeTab === Tab.Characteristics && 'hidden'}`}>{description}</p>
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
