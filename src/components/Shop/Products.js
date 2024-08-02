import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCT = [
  {
    id: 'p1',
    price: 6,
    title:'Test',
    description: 'This is a first product - amazing!'
  },
  {
    id: 'p2',
    price: 5,
    title:'Exam',
    description: 'This is a second product - amazing!'
  }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((product) => <ProductItem 
          key = {product.id}
          id = {product.id}
          price = {product.price}
          title = {product.title}
          description = {product.description}
        />)}
      </ul>
    </section>
  );
};

export default Products;
