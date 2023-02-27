import { category } from '../../const';
import { Category } from '../category/Category';
import maleCategoryImage from '../../assets/category-1.jpg';
import femaleCategoryImage from '../../assets/category-2.jpg';
import './Categories.css';

function Categories() {
  return (
    <section className="categories">
      <Category
        category={category.male.category}
        image={maleCategoryImage}
        alt={category.male.alt}
        link={category.male.link}
      />
      <Category
        category={category.female.category}
        image={femaleCategoryImage}
        alt={category.female.alt}
        link={category.female.link}
      />
    </section>
  );
}

export { Categories };
