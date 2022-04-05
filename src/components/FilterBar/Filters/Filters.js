import {
  FilterHeader,
  FilterCategories,
  FilterSortBy,
} from "./Filters.components.helpers";
import "./Filters.styles.css";
import { useFilterBar } from "context";

function Filters() {
  const {
    filterState: { filterViewDisplay },
  } = useFilterBar();
  return (
    <div className={"filters"} style={{ display: filterViewDisplay }}>
      <FilterHeader />
      <FilterCategories />
      <FilterSortBy />
    </div>
  );
}

export { Filters };
