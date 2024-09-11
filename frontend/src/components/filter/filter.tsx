import { useState } from 'react';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import FilterItem from '../filter-item/filter-item';
import { GuitarType } from '../../consts';
import { changeFilterGuitarType, changeFilterStringsCount } from '../../store/products/products-slice';
import { StringsCountType } from '../../types/product';

function Filter(): JSX.Element {
  const dispatch = useAppDispatch();

  const [filterGuitarType, setFilterGuitarType] = useState(Object.values(GuitarType));
  const [filterStringsCount, setFilterStringsCount] = useState(Object.values(StringsCountType));

  dispatch(changeFilterGuitarType({filterGuitarType: filterGuitarType}));
  dispatch(changeFilterStringsCount({filterStringsCount: filterStringsCount}));

  const handleFilterGuitarTypeClick = (item: GuitarType) => {
    if(filterGuitarType.includes(item)) {
      setFilterGuitarType(filterGuitarType => filterGuitarType.filter((val) => val !== item))
    } else {
      setFilterGuitarType(filterGuitarType => [...filterGuitarType, item])
    }
    dispatch(changeFilterGuitarType({filterGuitarType: filterGuitarType}))
  }

  const handleFilterStringsCountClick = (item: StringsCountType) => {
    if(filterStringsCount.includes(item)) {
      setFilterStringsCount(filterStringsCount => filterStringsCount.filter((val) => val !== item))
    } else {
      setFilterStringsCount(filterStringsCount => [...filterStringsCount, item])
    }
    dispatch(changeFilterStringsCount({filterStringsCount: filterStringsCount}));
  }

  const handleResetButton = () => {
    setFilterGuitarType([]);
    setFilterStringsCount([]);
    dispatch(changeFilterGuitarType({filterGuitarType: filterGuitarType}));
    dispatch(changeFilterStringsCount({filterStringsCount: filterStringsCount}));
  }

  return (
    <form className="catalog-filter" action="#" method="post">
      <h2 className="title title--bigger catalog-filter__title">Фильтр</h2>
      <fieldset className="catalog-filter__block">
        <legend className="catalog-filter__block-title">Тип гитар</legend>
        <FilterItem
          id="acoustic"
          isChecked={filterGuitarType.includes(GuitarType.Acoustic)}
          label='Акустические гитары'
          isDisabled={false}
          handler={() => handleFilterGuitarTypeClick(GuitarType.Acoustic)}
        />
        <FilterItem
          id="electro"
          isChecked={filterGuitarType.includes(GuitarType.Electric)}
          label='Электрогитары'
          isDisabled={false}
          handler={() => handleFilterGuitarTypeClick(GuitarType.Electric)}
        />
        <FilterItem
          id="ukulele"
          isChecked={filterGuitarType.includes(GuitarType.Ukulele)}
          label='Укулеле'
          isDisabled={false}
          handler={() => handleFilterGuitarTypeClick(GuitarType.Ukulele)}
        />
      </fieldset>
      <fieldset className="catalog-filter__block">
        <legend className="catalog-filter__block-title">Количество струн</legend>
        <FilterItem
          id="4-strings"
          isChecked={filterStringsCount.includes(StringsCountType.Four)}
          label='4'
          isDisabled={false}
          handler={() => handleFilterStringsCountClick(StringsCountType.Four)}
        />
        <FilterItem
          id="6-strings"
          isChecked={filterStringsCount.includes(StringsCountType.Six)}
          label='6'
          isDisabled={false}
          handler={() => handleFilterStringsCountClick(StringsCountType.Six)}
        />
        <FilterItem
          id="7-strings"
          isChecked={filterStringsCount.includes(StringsCountType.Seven)}
          label='7'
          isDisabled={false}
          handler={() => handleFilterStringsCountClick(StringsCountType.Seven)}
        />
        <FilterItem
          id="12-strings"
          isChecked={filterStringsCount.includes(StringsCountType.Twelve)}
          label='12'
          isDisabled={false}
          handler={() => handleFilterStringsCountClick(StringsCountType.Twelve)}
        />
      </fieldset>
      <button className="catalog-filter__reset-btn button button--black-border button--medium" type="reset" onClick={handleResetButton}>Очистить</button>
    </form>
  )
}

export default Filter;
