import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'My First Book',
    description: 'The first book I ever wrote',
  },
  {
    id: 'p2',
    price: 5,
    title: 'My Second Book',
    description: 'The second book I ever wrote',
  },
  {
    id: 'p3',
    price: 20,
    title: 'Puzzle Game',
    description: 'Best puzzle to make you think smart!'
  },
  {
    id: 'p4',
    price: 30,
    title: 'Photo Album',
    description: 'Keep your memories intact with this album!!'
  },
  {
    id: 'p5',
    price: 120,
    title: 'Titan Watch',
    description: 'Shall Always be on time when you have a Titan watch..'
  },
 
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => {
          console.log("In Dummy Products map:"+product);
       return  <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          /> 
        })}
        
      </ul>
    </section>
  );
};

export default Products;
