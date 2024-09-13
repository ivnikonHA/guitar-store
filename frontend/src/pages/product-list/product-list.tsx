import { Helmet } from 'react-helmet-async'
import CatalogItem from '../../components/catalog-item/catalog-item'
import Filter from '../../components/filter/filter'
import PaginationList from '../../components/pagination-list/pagination-list'
import Sort from '../../components/sort/sort'
import { useAppSelector } from '../../hooks/use-app-selector'
import { getFilterGuitarType, getFilterStringsCount, getProducts, getSortDirection, getSortType } from '../../store/products/products-selectors'
import { Link } from 'react-router-dom'
import { AppRoute } from '../../consts'
import { sorting } from './utils'

function ProductList(): JSX.Element {
  const products = useAppSelector(getProducts);
  const filterGuitarType = useAppSelector(getFilterGuitarType);
  const filteredGuitarTypeProducts = products.filter((product) => filterGuitarType.includes(product.guitarType));
  const filterStringsCount = useAppSelector(getFilterStringsCount);
  const filteredProducts = filteredGuitarTypeProducts.filter((product) => filterStringsCount.includes(product.stringsCount));
  const sortType = useAppSelector(getSortType);
  const sortDirection = useAppSelector(getSortDirection);

  const sortedProducts = sorting[sortType](filteredProducts, sortDirection);

  return (
    <>
    <Helmet>
      <title>Guitar Shop - Каталог</title>
    </Helmet>
    <main className="page-content">
      <section className="product-list">
        <div className="container">
          <h1 className="product-list__title">Список товаров</h1>
          <ul className="breadcrumbs">
            <li className="breadcrumbs__item">
              <Link className="link" to={AppRoute.Root}>Вход</Link>
            </li>
            <li className="breadcrumbs__item">
              <a className="link">Товары</a>
            </li>
          </ul>
          <div className="catalog">
            <Filter />
            <Sort />
            <div className="catalog-cards">
              <ul className="catalog-cards__list">
                {
                  sortedProducts.map((product) => (
                    <CatalogItem key={product.id} product={product}/>
                  )
                  )
                }
              </ul>
            </div>
          </div>
          <Link
            className="button product-list__button button--red button--big"
            to={AppRoute.AddProduct}
          >Добавить новый товар</Link>
          <PaginationList />
        </div>
      </section>
    </main>
    </>
  )
}

export default ProductList;
