const link = {
  male: '/male',
  female: '/female',
  home: '/index.html',
  cart: '/cart',
  user: '/user',
  likes: '/likes',
  help: '/help',
  delivery: '/delivery',
  refund: '/refund',
  loyalty: '/loyalty',
  contacts: '/contacts',
  stores: '/stores',
  product: 'product/:id',
};

const category = {
  male: {
    category: 'Мужское',
    image: `../../assets/category-1.jpg`,
    alt: 'Мужская обувь',
    link: link.male,
  },
  female: {
    category: 'Женское',
    image: `/category-2.jpg`,
    alt: 'Женская обувь',
    link: link.female,
  },
};

const likeButtonClasses = {
  default: 'product__button',
  active: 'product__button product__button--active',
};

const headerMenuClasses = {
  default: 'header__menu',
  active: 'header__menu header__menu--active',
};

const sort = {
  default: 'По умолчанию',
  priceASC: 'По возрастанию цены',
  priceDESC: 'По убыванию цены',
};

const filterType = {
  size: 'size',
  brand: 'brand',
};

const defaultFilter = [];

export {
  category,
  link,
  likeButtonClasses,
  sort,
  headerMenuClasses,
  filterType,
  defaultFilter,
};
