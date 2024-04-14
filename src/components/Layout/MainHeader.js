import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import logoImg from '../../assets/cart.jpg';

const MainHeader = (props) => {
  return (
    <header className={classes.header}>
      <img src={logoImg} alt="A Shopping Cart"></img>
      <h1>Simply Shopping</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
