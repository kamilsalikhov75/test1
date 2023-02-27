import { useEffect } from 'react';
import { useState } from 'react';
import { defaultFilter, filterType } from '../../const';
import { Checkbox } from '../checkbox/Checkbox';
import './Filter.css';

function Filter({
  currentProducts,
  setBrandFilter,
  setSizeFilter,
  sizeFilter,
  brandFilter,
}) {
  const [sizes, setSizes] = useState(getSizes(currentProducts));
  const [brands, setBrands] = useState(getBrands(currentProducts));

  useEffect(() => {
    setSizes(getSizes(currentProducts));
    setBrands(getBrands(currentProducts));
  }, [currentProducts]);

  function handleClick() {
    setBrandFilter(defaultFilter);
    setSizeFilter(defaultFilter);
  }
  return (
    <div className="filter">
      <div className="filter__block">
        <label htmlFor="sortSelect" className="sort__label">
          Размер
        </label>
        <div className="checkboxes__block">
          {sizes.map((size) => {
            return (
              <Checkbox
                key={size}
                text={size}
                filter={sizeFilter}
                setFilter={setSizeFilter}
              />
            );
          })}
        </div>
      </div>
      <div className="filter__block">
        <label htmlFor="sortSelect" className="sort__label">
          Бренд
        </label>
        <div className="checkboxes__block">
          {brands.map((brand) => {
            return (
              <Checkbox
                key={brand}
                text={brand}
                filter={brandFilter}
                setFilter={setBrandFilter}
              />
            );
          })}
        </div>
      </div>
      <button className="filter__button" onClick={handleClick}>
        Cбросить все фильтры
      </button>
    </div>
  );
}

function getSizes(products) {
  const arr = products.map((product) => {
    return product.sizes.map((size) => size.size);
  });
  const sizes = Array.from(new Set(arr.flat()));
  return sizes.sort((a, b) => {
    return a - b;
  });
}

function getBrands(products) {
  const arr = products.map((product) => {
    return product.brand;
  });
  const brands = Array.from(new Set(arr));
  return brands;
}

export { Filter };
