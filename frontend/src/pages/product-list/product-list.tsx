import { Helmet } from 'react-helmet-async'
import CatalogItem from '../../components/catalog-item/catalog-item'
import Filter from '../../components/filter/filter'
import Footer from '../../components/footer/footer'
import PaginationList from '../../components/pagination-list/pagination-list'
import Sort from '../../components/sort/sort'
import Header from '../../components/header/header'

function ProductList(): JSX.Element {
  return (
    <>
    <Helmet>
      <title>Guitar Shop</title>
    </Helmet>
    <Header />
    <main className="page-content">
      <section className="product-list">
        <div className="container">
          <h1 className="product-list__title">Список товаров</h1>
          <ul className="breadcrumbs">
            <li className="breadcrumbs__item"><a className="link" href="./main.html">Вход</a>
            </li>
            <li className="breadcrumbs__item"><a className="link">Товары</a>
            </li>
          </ul>
          <div className="catalog">
            <Filter />
            <Sort />
            <div className="catalog-cards">
              <ul className="catalog-cards__list">
                <CatalogItem />
                <CatalogItem />
                <CatalogItem />
                <CatalogItem />
                <CatalogItem />
              </ul>
            </div>
          </div>
          <button className="button product-list__button button--red button--big">Добавить новый товар</button>
          <PaginationList />
        </div>
      </section>
    </main>
    <Footer />
    </>
  )
}

export default ProductList;
