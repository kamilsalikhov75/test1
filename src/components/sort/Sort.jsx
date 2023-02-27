import { sort } from '../../const';
import './Sort.css';

function Sort({ setCurrentSort }) {
  function handleChange(e) {
    setCurrentSort(e.target.value);
  }
  return (
    <div className="sort__block">
      <label htmlFor="sortSelect" className="sort__label">
        Cортировка:
      </label>
      <select
        id="sortSelect"
        className="sort__select"
        onChange={(e) => handleChange(e)}
      >
        <option value={sort.default} className="sort__option">
          {sort.default}
        </option>
        <option value={sort.priceASC} className="sort__option">
          {sort.priceASC}
        </option>
        <option value={sort.priceDESC} className="sort__option">
          {sort.priceDESC}
        </option>
      </select>
    </div>
  );
}

export { Sort };
