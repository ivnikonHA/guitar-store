import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';

import { useAppSelector } from '../../hooks/use-app-selector';
import { fetchProductByIdAction } from '../../store/api-actions';
import { getCurrentProduct, getProductDataLoadingStatus } from '../../store/product/product-selectors';
import Error404 from '../error-404/error-404';
import LoadingPage from '../loading-page/loading-page';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { AppRoute, BACKEND_URL, UPLOAD_PATH } from '../../consts';
import dayjs from 'dayjs';
import { GuitarType, StringsCountType } from '../../types/product';
import { ChangeHandler } from '../../types/state';

function EditProduct(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if(id) {
      dispatch(fetchProductByIdAction(id));
    }
  }, [id, dispatch]);

  const currentProduct = useAppSelector(getCurrentProduct);
  const isProductDataLoading = useAppSelector(getProductDataLoadingStatus);

  const [formData, setFormData] = useState({
    title: currentProduct?.name,
    sku: currentProduct?.article,
    description: currentProduct?.description,
    itemType: currentProduct?.guitarType,
    photo: currentProduct?.photo,
    price: currentProduct?.price,
    publishDate: currentProduct?.publishDate,
    stringsCount: currentProduct?.stringsCount,
  });

  const handleFieldChange: ChangeHandler = (evt) => {
    const { name, value } = evt.currentTarget;
    console.log(name, value, formData)
    setFormData({ ...formData, [name]: value });
  };
  const handleBackButton = () => {
    navigate(AppRoute.ProductList);
  }


  if(isProductDataLoading) {
    return <LoadingPage />
  }

  if(!currentProduct) {
    return <Error404 />
  }

  return (
    <>
      <Helmet>
        <title>Guitar Shop - Редактировать товар</title>
      </Helmet>
      <main className="page-content">
        <section className="edit-item">
          <div className="container">
            <h1 className="edit-item__title">{formData.title}</h1>
            <ul className="breadcrumbs">
              <li className="breadcrumbs__item"><a className="link" href="./main.html">Вход</a>
              </li>
              <li className="breadcrumbs__item"><a className="link">Товары</a>
              </li>
              <li className="breadcrumbs__item"><a className="link">СURT Z30 Plus</a>
              </li>
            </ul>
            <form className="edit-item__form" action="#" method="get">
              <div className="edit-item__form-left">
                <div className="edit-item-image edit-item__form-image">
                  <div className="edit-item-image__image-wrap">
                    <img className="edit-item-image__image" src={`${BACKEND_URL}${UPLOAD_PATH}${formData.photo}`} srcSet="img/content/add-item-1@2x.png 2x" width="133" height="332" alt="СURT Z30 Plus" />
                  </div>
                  <div className="edit-item-image__btn-wrap">
                    <button className="button button--small button--black-border edit-item-image__btn">Заменить
                    </button>
                    <button className="button button--small button--black-border edit-item-image__btn">Удалить</button>
                  </div>
                </div>
                <div className="input-radio edit-item__form-radio"><span>Тип товара</span>
                  <input
                    type="radio"
                    id="guitar"
                    name="itemType"
                    value={GuitarType.Acoustic}
                    checked={formData.itemType === GuitarType.Acoustic ? true: false }
                    onChange={handleFieldChange}
                  />
                  <label htmlFor="guitar">Акустическая гитара</label>
                  <input
                    type="radio"
                    id="el-guitar"
                    name="itemType"
                    value={GuitarType.Electric}
                    checked={formData.itemType === GuitarType.Electric ? true: false}
                    onChange={handleFieldChange}
                  />
                  <label htmlFor="el-guitar">Электрогитара</label>
                  <input
                    type="radio"
                    id="ukulele"
                    name="itemType"
                    value={GuitarType.Ukulele}
                    checked={formData.itemType === GuitarType.Ukulele ? true: false}
                    onChange={handleFieldChange}
                  />
                  <label htmlFor="ukulele">Укулеле</label>
                </div>
                <div className="input-radio edit-item__form-radio"><span>Количество струн</span>
                  <input
                    type="radio"
                    id="string-qty-4"
                    name="stringsCount"
                    value={StringsCountType.Four}
                    checked={formData.stringsCount === StringsCountType.Four}
                    onChange={handleFieldChange}
                  />
                  <label htmlFor="string-qty-4">4</label>
                  <input
                    type="radio"
                    id="string-qty-6"
                    name="stringsCount"
                    value={StringsCountType.Six}
                    checked={formData.stringsCount === StringsCountType.Six}
                    onChange={handleFieldChange}
                  />
                  <label htmlFor="string-qty-6">6</label>
                  <input
                    type="radio"
                    id="string-qty-7"
                    name="stringsCount"
                    value={StringsCountType.Seven}
                    checked={formData.stringsCount === StringsCountType.Seven}
                    onChange={handleFieldChange}
                  />
                  <label htmlFor="string-qty-7">7</label>
                  <input
                    type="radio"
                    id="string-qty-12"
                    name="stringsCount"
                    value={StringsCountType.Twelve}
                    checked={formData.stringsCount === StringsCountType.Twelve}
                    onChange={handleFieldChange}
                  />
                  <label htmlFor="string-qty-12">12</label>
                </div>
              </div>
              <div className="edit-item__form-right">
                <div className="custom-input edit-item__form-input">
                  <label><span>Дата добавления товара</span>
                    <input type="text" name="date" value={dayjs(formData.publishDate).format('DD.MM.YYYY')} placeholder="Дата в формате 00.00.0000" readOnly />
                  </label>
                  <p>Заполните поле</p>
                </div>
                <div className="custom-input edit-item__form-input">
                  <label><span>Наименование товара</span>
                    <input type="text" name="title" value={formData.title} placeholder="Наименование" onChange={handleFieldChange}/>
                  </label>
                  <p>Заполните поле</p>
                </div>
                <div className="custom-input edit-item__form-input edit-item__form-input--price">
                  <label><span>Цена товара</span>
                    <input type="text" name="price" value={formData.price} placeholder="Цена в формате 00 000" onChange={handleFieldChange} />
                  </label>
                  <p>Заполните поле</p>
                </div>
                <div className="custom-input edit-item__form-input">
                  <label><span>Артикул товара</span>
                    <input type="text" name="sku" value={formData.sku} placeholder="Артикул товара" onChange={handleFieldChange} />
                  </label>
                  <p>Заполните поле</p>
                </div>
                <div className="custom-textarea edit-item__form-textarea">
                  <label><span>Описание товара</span>
                    <textarea name="description" placeholder="" onChange={handleFieldChange} value={formData.description}></textarea>
                  </label>
                  <p>Заполните поле</p>
                </div>
              </div>
              <div className="edit-item__form-buttons-wrap">
                <button className="button button--small edit-item__form-button" type="submit">Сохранить изменения</button>
                <button className="button button--small edit-item__form-button" type="button" onClick={handleBackButton}>Вернуться к списку товаров</button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}

export default EditProduct;
