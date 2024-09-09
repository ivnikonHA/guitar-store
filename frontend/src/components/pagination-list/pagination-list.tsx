import PaginationItem from '../pagination-item/pagination-item';

function PaginationList(): JSX.Element {
  return (
    <div className="pagination product-list__pagination">
      <ul className="pagination__list">
        <PaginationItem page={1} isActive={false}/>
        <PaginationItem page={2} isActive={true} />
        <PaginationItem page={3} isActive={false} />
      </ul>
    </div>
  )
}

export default PaginationList;
