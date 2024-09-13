import { FormEvent, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { AppRoute, GuitarType } from '../../consts';
import { createProductByIdAction } from '../../store/api-actions';
import { CreateProductDto, StringsCountType } from '../../types/product';
import { ChangeHandler } from '../../types/state';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

function AddProduct(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    sku: '',
    description: '',
    itemType: GuitarType.Acoustic,
    photo: 'default-photo.jpg',
    price: 0,
    publishDate: dayjs(),
    stringsCount: StringsCountType.Four,
  });

  const handleFieldChange: ChangeHandler = (evt) => {
    const { name, value } = evt.currentTarget;
    setFormData({ ...formData, [name]: value });
  };
  const handleBackButton = () => {
    navigate(AppRoute.ProductList);
  }

  const handleSubmitForm = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const productData: CreateProductDto = {
      name: formData.title,
      description: formData.description,
      publishDate: formData.publishDate.toISOString(),
      photo: formData.photo,
      guitarType: formData.itemType,
      article: formData.sku,
      stringsCount: formData.stringsCount,
      price: +formData.price
    };
    dispatch(createProductByIdAction(productData))
      .then(() => {
        navigate(AppRoute.ProductList)
      });
  };

  return (
    <>
      <Helmet>
        <title>Guitar Shop - Добавить товар</title>
      </Helmet>
      <main className="page-content">
        <section className="add-item">
          <div className="container">
            <h1 className="add-item__title">Новый товар</h1>
            <ul className="breadcrumbs">
              <li className="breadcrumbs__item"><a className="link" href="./main.html">Вход</a>
              </li>
              <li className="breadcrumbs__item"><a className="link">Товары</a>
              </li>
              <li className="breadcrumbs__item"><a className="link">Новый товар</a>
              </li>
            </ul>
            <form className="add-item__form" method="post" onSubmit={handleSubmitForm}>
              <div className="add-item__form-left">
                <div className="edit-item-image add-item__form-image">
                  <div className="edit-item-image__image-wrap">
                  </div>
                  <div className="edit-item-image__btn-wrap">
                    <button className="button button--small button--black-border edit-item-image__btn">Добавить
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
              <div className="add-item__form-right">
                <div className="custom-input add-item__form-input">
                  <label><span>Дата добавления товара</span>
                    <input type="text" name="date" value={formData.publishDate.format('DD.MM.YYYY')} placeholder="Дата в формате 00.00.0000" readOnly />
                  </label>
                  <p>Заполните поле</p>
                </div>
                <div className="custom-input add-item__form-input">
                  <label><span>Введите наименование товара</span>
                    <input type="text" name="title" value={formData.title} placeholder="Наименование" onChange={handleFieldChange} />
                  </label>
                  <p>Заполните поле</p>
                </div>
                <div className="custom-input add-item__form-input add-item__form-input--price is-placeholder">
                  <label><span>Введите цену товара</span>
                    <input type="text" name="price" value={formData.price} placeholder="Цена в формате 00 000"  onChange={handleFieldChange}/>
                  </label>
                  <p>Заполните поле</p>
                </div>
                <div className="custom-input add-item__form-input">
                  <label><span>Введите артикул товара</span>
                    <input type="text" name="sku" value={formData.sku} placeholder="Артикул товара" onChange={handleFieldChange} />
                  </label>
                  <p>Заполните поле</p>
                </div>
                <div className="custom-textarea add-item__form-textarea">
                  <label><span>Введите описание товара</span>
                    <textarea name="description" value={formData.description} placeholder="" onChange={handleFieldChange}></textarea>
                  </label>
                  <p>Заполните поле</p>
                </div>
              </div>
              <div className="add-item__form-buttons-wrap">
                <button className="button button--small add-item__form-button" type="submit">Сохранить изменения</button>
                <button className="button button--small add-item__form-button" type="button" onClick={handleBackButton}>Вернуться к списку товаров</button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}

export default AddProduct;
