type PaginationItemProps = {
  page: number;
  isActive: boolean;
}

function PaginationItem({ page, isActive }: PaginationItemProps): JSX.Element {
  return (
    <li className={`pagination__page ${isActive ? "pagination__page--active": ""}`}>
      <a className="link pagination__page-link" href={`${page}`}>{page}</a>
    </li>
  )
}

export default PaginationItem;
