import { useEffect } from 'react';
import Nav from './components/Nav';
import Mainroutes from './routes/Mainroutes'
import { useDispatch, useSelector } from 'react-redux';
import { asynccurrentuser } from './store/actions/userAction';
import { asyncloadproduct } from './store/actions/productAction';
const App = () => {

  const dispatch = useDispatch();

  const { users } = useSelector(state => state.userReducer); 
  const { products } = useSelector(state => state.productsReducer);

  useEffect(() => {
    !users && dispatch(asynccurrentuser());
  }, [users])

  useEffect(() => {
    products.length == 0 && dispatch(asyncloadproduct());
  }, [products])


  return (
    <div>
      <Nav />
      <Mainroutes />
    </div>
  );
};

export default App;
