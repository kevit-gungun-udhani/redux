
import classes from './Counter.module.css';
import {useDispatch, useSelector} from 'react-redux'
import  { counterActions }  from '../store/CounterSlice';
 

const Counter = () => {
  const counter = useSelector((state) => {
    return state.counter.counter
  })
  const show = useSelector((state) => {
    return state.counter.showToggle
  })
  const dispatch = useDispatch()
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  const increaseHandler = () => {
    dispatch(counterActions.increase(10))
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;