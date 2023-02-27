import { ProductsBlock } from '../../components/productsBlock/ProductsBlock';
import { products } from '../../mocks/product';
import { user } from '../../mocks/user';

function Likes() {
  return (
    <ProductsBlock
      title="Понравившиеся товары"
      products={products.filter((product) => {
        return user.likes.includes(product.id);
      })}
    />
  );
}

export { Likes };
