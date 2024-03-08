const FIRE_BASE_URL = 'https://firebasestorage.googleapis.com/v0/b/react-ecommerce-d2ea4.appspot.com/o/';

const imagePath = (name) => {
  return FIRE_BASE_URL + name + '?alt=media';
};

const createSlug = (title) => {
  const cleanedTitle = title.replace(/[^\w\s]/gi, '');
  const slug = cleanedTitle.toLowerCase().replace(/\s+/g, '-');
  return slug;
};

const data = [
  {
    id: 1,
    image: imagePath('12.jpg'),
    title: 'Working Boy T-Shirt',
    slug: createSlug('Working Boy T-Shirt'),
    price: '50',
    category: 'Men',
    reviews: 20,
  },
  {
    id: 2,
    image: imagePath('4_1.jpg'),
    title: 'Slim Fit Dress Shirts',
    slug: createSlug('Slim Fit Dress Shirts'),
    price: '60',
    category: 'Men',
    reviews: 30,
  },
  {
    id: 3,
    image: imagePath('11.jpeg'),
    title: 'Working Girl T-Shirt',
    slug: createSlug('Working Girl T-Shirt'),
    price: '110',
    category: 'Women',
    reviews: 16,
  },
  {
    id: 4,
    image: imagePath('5.2-min.jpg'),
    title: 'Drawstring Shirt Dress',
    slug: createSlug('Drawstring Shirt Dress'),
    price: '80',
    category: 'Men',
    reviews: 13,
  },
  {
    id: 6,
    image: imagePath('13.jpg'),
    title: 'Black Fashion Jacket',
    slug: createSlug('Black Fashion Jacket'),
    price: '80',
    category: 'Men',
    reviews: 45,
  },
  {
    id: 7,
    image: imagePath('27.jpg'),
    title: 'Buck Butte Insulated Hooded Jacket',
    slug: createSlug('Buck Butte Insulated Hooded Jacket'),
    price: '210',
    category: 'Men',
    reviews: 2,
  },
  {
    id: 8,
    image: imagePath('32.jpg'),
    title: 'Men’s Hoodies in Brown',
    slug: createSlug('Men’s Hoodies in Brown'),
    price: '90',
    category: 'Men',
    reviews: 19,
  },
];

export default data;
