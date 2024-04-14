import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { Fragment, useEffect } from 'react';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';
import { sendCartData, fetchCartData } from './store/cart-actions';

//will be initialized only once when this file is executed , 
//not everytime the component is reloaded. So we dont send PUT request at the beginning of app,
//and cart.json is not overwriiten and we dont get empty cart on app reload.
let isInitial = true;

function App() {

  const dispatch = useDispatch();

  //the function written in useSelector will be 
  //executed by redux and so it will automatically
  //get the current state. Then we can access ui map key to get
  //the initialState and then fetch whatever info we need
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);


  //cart.json at end of fetch url will be telling firebase to 
  //create new object called cart
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);


  return (
    <Fragment>
      {console.log(notification)};
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
