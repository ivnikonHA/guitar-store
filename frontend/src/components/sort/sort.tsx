import { useState } from 'react';
import { SortDirection, SortType } from '../../consts';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { changeSortDirection, changeSortType } from '../../store/products/products-slice';

function Sort(): JSX.Element {
  const dispatch = useAppDispatch();
  const [sortType, setSortType] = useState(SortType.DATE);
  const [sortDirection, setSortDirection] = useState(SortDirection.DESCENDING);

  const handleSortTypeClick = (item: string) => {
    setSortType(item);
    dispatch(changeSortType({ sortType: item }));
  };
  const handleSortDirectionClick = (item: number) => {
    setSortDirection(item);
    dispatch(changeSortDirection({ sortDirection: item }))
  };

  return (
    <div className="catalog-sort">
      <h2 className="catalog-sort__title">Сортировать:</h2>
      <div className="catalog-sort__type">
        <button
          className={`catalog-sort__type-button ${sortType === SortType.DATE && 'catalog-sort__type-button--active'}`}
          aria-label="по дате"
          onClick={() => handleSortTypeClick(SortType.DATE)}
        >по дате</button>
        <button
          className={`catalog-sort__type-button ${sortType === SortType.PRICE && 'catalog-sort__type-button--active'}`}
          aria-label="по цене"
          onClick={() => handleSortTypeClick(SortType.PRICE)}
        >по цене</button>
      </div>
      <div className="catalog-sort__order">
        <button
          className={`catalog-sort__order-button catalog-sort__order-button--up ${sortDirection === SortDirection.ACSENDING && 'catalog-sort__order-button--active'}`}
          aria-label="По возрастанию"
          onClick={() => handleSortDirectionClick(SortDirection.ACSENDING)}
        ></button>
        <button
          className={`catalog-sort__order-button catalog-sort__order-button--down ${sortDirection === SortDirection.DESCENDING && 'catalog-sort__order-button--active'}`}
          aria-label="По убыванию"
          onClick={() => handleSortDirectionClick(SortDirection.DESCENDING)}
        ></button>
      </div>
    </div>
  )
}

export default Sort;
