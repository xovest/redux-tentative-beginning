import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment(2))}>+</button>
      {/* the payload is the nr incrementer */}
      <button onClick={() => dispatch(decrement())}>-</button>

      {isLogged ? <h3>Forbidden data</h3> : 'sup noone'}
    </div>
  );
}

export default App;
