import { Link } from 'react-router-dom';
import { BACKEND_URL, UPLOAD_PATH } from '../../consts';
import { ProductType } from '../../types/product';
import dayjs from 'dayjs';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { deleteProductByIdAction } from '../../store/api-actions';

type CatalogItemProps = {
  product: ProductType
}

function CatalogItem({ product }: CatalogItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleDeleteButtonClick = (id: string) => {
    dispatch(deleteProductByIdAction(id));
  }
  return (
    <li className="catalog-item">
      <div className="catalog-item__data">
        <img src={`${BACKEND_URL}${UPLOAD_PATH}${product.photo}`} srcSet="img/content/catalog-product-1@2x.png 2x" width="36" height="93" alt="Картинка гитары" />
        <div className="catalog-item__data-wrapper">
          <Link className="link" to={`/product/${product.id}`}>
            <p className="catalog-item__data-title">{product.name}</p>
            <p>{product.guitarType} - {product.stringsCount}</p>
          </Link>
          <br />
          <p className="catalog-item__data-date">Дата добавления {dayjs(product.publishDate).format('DD/MM/YYYY')}</p>
          <p className="catalog-item__data-price">{product.price} ₽</p>
        </div>
      </div>
      <div className="catalog-item__buttons">
        <Link className="button button--small button--black-border" to={`/edit-product/${product.id}`} aria-label="Редактировать товар">Редактировать</Link>
        <button
          className="button button--small button--black-border"
          type="submit"
          aria-label="Удалить товар"
          onClick={() => handleDeleteButtonClick(product.id)}
        >Удалить</button>
      </div>
    </li>
  )
}

export default CatalogItem;
