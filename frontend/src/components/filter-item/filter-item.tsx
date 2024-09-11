type FilterItemProps = {
  id: string,
  isChecked: boolean,
  isDisabled: boolean,
  label: string,
  handler: () => void
}

function FilterItem({ id, isChecked, isDisabled, label, handler }: FilterItemProps): JSX.Element {
  return (
    <div className="form-checkbox catalog-filter__block-item">
      <input
        className="visually-hidden"
        type="checkbox"
        id={id}
        name={id}
        defaultChecked={isChecked}
        disabled={isDisabled}
        onChange={handler}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default FilterItem;
