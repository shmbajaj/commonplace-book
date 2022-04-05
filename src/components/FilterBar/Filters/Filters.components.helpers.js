import { useFilterBar } from "context";

function FilterHeader() {
  const { dispatch } = useFilterBar();
  return (
    <div className="card card-with-no-border">
      <div className="card-body">
        <div className="card-heading card-heading-dflex">
          <h5 className="card-title card-title-m-0">Filters</h5>
          <h6
            onClick={() => dispatch({ type: "CLEAR_ALL_FILTERS" })}
            className="card-subtitle card-subtitle-m-0 clear-all-filters"
          >
            Clear
          </h6>
          <h6
            onClick={() =>
              dispatch({ type: "TOGGLE_FILTER_VIEW", payload: "none" })
            }
          >
            <span className={`material-icons-outlined endIcon`}>close</span>
          </h6>
        </div>
      </div>
    </div>
  );
}

function FilterCategories() {
  const { filterState, dispatch } = useFilterBar();

  return (
    <div className="card card-with-no-border">
      <div className="card-body">
        <div className="card-heading card-heading-dflex">
          <h5 className="card-title card-title-m-0">Category</h5>
        </div>
      </div>
      <div className="card-footer card-footer-dir-col">
        <div className="card-filter-category">
          <label>
            <input
              checked={filterState.inPriorirty}
              onChange={() => dispatch({ type: "IN_PRIORIRTY" })}
              type="checkbox"
              name="intelligence"
            />
            Priorirty
          </label>
        </div>
      </div>
    </div>
  );
}

function FilterSortBy() {
  const { filterState, dispatch } = useFilterBar();

  return (
    <div className="card card-with-no-border">
      <div className="card-body">
        <div className="card-heading card-heading-dflex">
          <h5 className="card-title card-title-m-0">Sort by</h5>
        </div>
      </div>
      <div className="card-footer card-footer-dir-col">
        <div className="card-filter-category">
          <label htmlFor="createdon-otn">
            <input
              checked={
                filterState.sortBy &&
                filterState.sortBy === "Oldest to Newest"
              }
              onChange={() =>
                dispatch({ type: "SORT_BY", payload: "Oldest to Newest" })
              }
              type="radio"
              name="createdon"
              id="createdon-otn"
            />
            Oldest to Newest
          </label>
        </div>

        <div className="card-filter-category">
          <label htmlFor="createdon-nto">
            <input
              checked={
                filterState.sortBy &&
                filterState.sortBy === "Newest to Oldest"
              }
              type="radio"
              name="createdon"
              id="createdon-nto"
              onChange={() =>
                dispatch({ type: "SORT_BY", payload: "Newest to Oldest" })
              }
            />
            Newest to Oldest
          </label>
        </div>
      </div>
    </div>
  );
}

export { FilterHeader, FilterCategories, FilterSortBy };
