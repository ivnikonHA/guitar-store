import FilterItem from '../filter-item/filter-item';

function Filter(): JSX.Element {
  return (
    <form className="catalog-filter" action="#" method="post">
      <h2 className="title title--bigger catalog-filter__title">Фильтр</h2>
      <fieldset className="catalog-filter__block">
        <legend className="catalog-filter__block-title">Тип гитар</legend>
        <FilterItem id="acoustic" isChecked={false} label='Акустические гитары' isDisabled={false}/>
        <FilterItem id="electro" isChecked={false} label='Электрогитары' isDisabled={false}/>
        <FilterItem id="ukulele" isChecked={true} label='Укулеле' isDisabled={false}/>
      </fieldset>
      <fieldset className="catalog-filter__block">
        <legend className="catalog-filter__block-title">Количество струн</legend>
        <FilterItem id="4-strings" isChecked={true} label='4' isDisabled={false}/>
        <FilterItem id="6-strings" isChecked={true} label='6' isDisabled={false}/>
        <FilterItem id="7-strings" isChecked={false} label='7' isDisabled={false}/>
        <FilterItem id="12-strings" isChecked={false} label='12' isDisabled={true}/>
      </fieldset>
      <button className="catalog-filter__reset-btn button button--black-border button--medium" type="reset">Очистить</button>
    </form>
  )
}

export default Filter;
