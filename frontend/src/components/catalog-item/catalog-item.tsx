import { Link } from 'react-router-dom';
import { AppRoute, BACKEND_URL, UPLOAD_PATH } from '../../consts';
import { ProductType } from '../../types/product';
import dayjs from 'dayjs';

type CatalogItemProps = {
  product: ProductType
}

function CatalogItem({ product }: CatalogItemProps): JSX.Element {
  return (
    <li className="catalog-item">
      <div className="catalog-item__data">
        <img src={`${BACKEND_URL}${UPLOAD_PATH}${product.photo}`} srcSet="img/content/catalog-product-1@2x.png 2x" width="36" height="93" alt="Картинка гитары" />
        <div className="catalog-item__data-wrapper">
          <Link className="link" to={`/product/${"test"}`}>
            <p className="catalog-item__data-title">{product.name}</p>
          </Link>
          <br />
          <p className="catalog-item__data-date">Дата добавления {dayjs(product.publishDate).format('DD/MM/YYYY')}</p>
          <p className="catalog-item__data-price">{product.price} ₽</p>
        </div>
      </div>
      <div className="catalog-item__buttons">
        <Link className="button button--small button--black-border" to={AppRoute.EditProduct} aria-label="Редактировать товар">Редактировать</Link>
        <button className="button button--small button--black-border" type="submit" aria-label="Удалить товар">Удалить</button>
      </div>
    </li>
  )
}

export default CatalogItem;
