import { useEffect, useState } from 'react';
import { Filter } from '../../components/filter/Filter';
import { ProductsBlock } from '../../components/productsBlock/ProductsBlock';
import { Sort } from '../../components/sort/Sort';
import { sort, defaultFilter } from '../../const';
import { products } from '../../mocks/product';
import './Catalog.css';

function Catalog({ gender }) {
  const [title, setTitle] = useState(getTitle(gender));
  const [currentSort, setCurrentSort] = useState(sort.default);
  const [currentProducts, setCurrentProducts] = useState(
    getDefaultProducts(gender)
  );
  const [filtredProducts, setFiltredProducts] = useState(currentProducts);
  const [sizeFilter, setSizeFilter] = useState(defaultFilter);
  const [brandFilter, setBrandFilter] = useState(defaultFilter);

  useEffect(() => {
    let sortedProducts = currentProducts;
    switch (currentSort) {
      case sort.priceASC:
        sortedProducts = sortedProducts.sort((a, b) => {
          return a.price - b.price;
        });
        break;
      case sort.priceDESC:
        sortedProducts = sortedProducts.sort((a, b) => {
          return b.price - a.price;
        });
        break;
      default:
        break;
    }
    setFiltredProducts(sortedProducts);
  }, [currentSort]);

  useEffect(() => {
    setTitle(getTitle(gender));
    setCurrentProducts(getDefaultProducts(gender));
    setFiltredProducts(getDefaultProducts(gender));
    setSizeFilter(defaultFilter);
    setBrandFilter(defaultFilter);
  }, [gender]);

  useEffect(() => {
    let products = currentProducts;
    if (brandFilter.length) {
      products = products.filter((item) => {
        if (brandFilter.includes(item.brand)) {
          return true;
        }
      });
    } else {
      setFiltredProducts(currentProducts);
    }
    if (sizeFilter.length) {
      products = products.filter((product) => {
        const sizes = product.sizes.map((size) => size.size);
        return sizes.some((size) => {
          return sizeFilter.includes(size);
        });
      });
    }
    setFiltredProducts(products);
  }, [sizeFilter, brandFilter]);

  return (
    <>
      <Sort setCurrentSort={setCurrentSort} />
      <Filter
        currentProducts={currentProducts}
        setBrandFilter={setBrandFilter}
        setSizeFilter={setSizeFilter}
        sizeFilter={sizeFilter}
        brandFilter={brandFilter}
      />
      <ProductsBlock title={title} products={filtredProducts} />
    </>
  );
}

function getTitle(gender) {
  switch (gender) {
    case 'male':
      return 'Мужская обувь';
    case 'female':
      return 'Женская обувь';
    default:
      break;
  }
}

function getDefaultProducts(gender) {
  const filtredProducts = products.filter((product) => {
    if (product.gender === 'unisex' || product.gender === gender) {
      return true;
    }
  });
  return filtredProducts;
}
export { Catalog };
