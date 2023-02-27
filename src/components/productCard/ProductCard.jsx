import { useState } from 'react';
import { likeButtonClasses } from '../../const';
import { user } from '../../mocks/user';
import './ProductCard.css';
import { Link } from 'react-router-dom';

function ProductCard({ id, img, brand, category, model, price }) {
  const [buttonClass, setButtonClass] = useState(getButtonClass(id));
  function handleClick() {
    if (isFavoriteProduct(id)) {
      user.likes = user.likes.filter((like) => like !== id);
      setButtonClass(likeButtonClasses.default);
    } else {
      user.likes.push(id);
      setButtonClass(likeButtonClasses.active);
    }
  }

  return (
    <div href={`/product/${id}`} className="product">
      <button className={buttonClass} onClick={handleClick}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 0L14.7441 9.29562L24 9.16718L16.44 14.7838L19.4164 24L12 18.1756L4.58359 24L7.56 14.7838L0 9.16718L9.25593 9.29562L12 0Z"
            fill="#8A8A8A"
          />
        </svg>
      </button>
      <Link to={`/product/${id}`} className="product__link">
        <img
          src={`http://127.0.0.1:5500/dist/${img}`}
          alt="Фотография товара"
          className="product__image"
        />
        <h5 className="product__title">{brand}</h5>
        <p className="product__description">{category}</p>
        <p className="product__description">{model}</p>
        <p className="product__price">{price} ₽</p>
      </Link>
    </div>
  );
}

function getButtonClass(id) {
  if (isFavoriteProduct(id)) {
    return likeButtonClasses.active;
  }
  return likeButtonClasses.default;
}

function isFavoriteProduct(id) {
  return user.likes.includes(id);
}
export { ProductCard };
