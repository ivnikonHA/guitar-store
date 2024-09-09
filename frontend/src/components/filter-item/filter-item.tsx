type FilterItemProps = {
  id: string,
  isChecked: boolean,
  isDisabled: boolean,
  label: string
}

function FilterItem({ id, isChecked, isDisabled, label }: FilterItemProps): JSX.Element {
  return (
    <div className="form-checkbox catalog-filter__block-item">
      <input className="visually-hidden" type="checkbox" id={id} name={id} checked={isChecked} disabled={isDisabled}/>
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default FilterItem;
