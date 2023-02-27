import { ProductCard } from '../productCard/ProductCard';
import './ProductsBlock.css';

function ProductsBlock({ title, products }) {
  return (
    <article className="products">
      <h3 className="products__title">{title}</h3>
      <div className="products__block">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              img={product.img}
              brand={product.brand}
              category={product.category}
              model={product.model}
              price={product.price}
            />
          );
        })}
      </div>
    </article>
  );
}

export { ProductsBlock };
