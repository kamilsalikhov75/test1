import { Categories } from '../../components/categories/Categories';
import { ProductsBlock } from '../../components/productsBlock/ProductsBlock';
import { products } from '../../mocks/product';

function Main() {
  return (
    <>
      <Categories />
      <ProductsBlock
        title="Популярные товары"
        products={products.filter((product) => {
          if (product.isPopular) {
            return true;
          }
        })}
      />
      <ProductsBlock
        title="Новые поступления"
        products={products.filter((product) => {
          if (product.isNew) {
            return true;
          }
        })}
      />
    </>
  );
}

export { Main };
