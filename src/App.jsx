import { useEffect } from 'react';
import Nav from './components/Nav';
import Mainroutes from './routes/Mainroutes'
import { useDispatch } from 'react-redux';
import { asynccurrentuser } from './store/actions/userAction';
import { asyncloadproduct } from './store/actions/productAction';
const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asynccurrentuser());
    dispatch(asyncloadproduct());
  }, [])


  return (
    <div>
      <Nav />
      <Mainroutes />
    </div>
  );
};

export default App;
