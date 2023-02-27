import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { SizeButton } from '../../components/sizeButton/SizeButton';
import { products } from '../../mocks/product';
import './Product.css';

function Product() {
  const { id } = useParams();
  const [currentSize, setCurrentSize] = useState(products[id].sizes[0].size);
  return (
    <div className="product__page-block">
      <img
        src={`http://127.0.0.1:5500/dist/${products[id].img}`}
        alt=""
        className="product__page-img"
      />
      <div className="product__page-info">
        <h1 className="product__info-title">{products[id].brand}</h1>
        <p className="product__info-subtitle">{`${products[id].category} ${products[id].model}`}</p>
        <div className="product__sizes-block">
          <p className="product__sizes-title">Доступные размеры</p>
          <div className="sizes__buttons">
            {products[id].sizes.map((size) => {
              if (size.size === currentSize) {
                return (
                  <SizeButton
                    key={size.size}
                    size={size.size}
                    setCurrentSize={setCurrentSize}
                    className="size__button size__button--active"
                  />
                );
              }
              return (
                <SizeButton
                  key={size.size}
                  size={size.size}
                  setCurrentSize={setCurrentSize}
                  className="size__button"
                />
              );
            })}
          </div>
        </div>
        <p className="product__price">{products[id].price} ₽</p>
        <button className="product__cart-button">Добавить в корзину</button>
      </div>
    </div>
  );
}

export { Product };
