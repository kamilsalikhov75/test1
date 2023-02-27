import './Category.css';
import { Link } from 'react-router-dom';

function Category({ category, image, alt, link }) {
  return (
    <div className="category">
      <Link to={link} className="category__image-link">
        <img src={image} alt={alt} className="category__image" />
      </Link>
      <h4 className="category__title">{category}</h4>
      <Link to={link} className="link category__link">
        Смотреть
      </Link>
    </div>
  );
}

export { Category };
