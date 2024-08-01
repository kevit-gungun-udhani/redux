
import classes from './Counter.module.css';
import {useDispatch, useSelector} from 'react-redux'

const Counter = () => {
  const counter = useSelector((state) => {
    return state.counter
  })
  const show = useSelector((state) => {
    return state.showToggle
  })
  const dispatch = useDispatch()
  const toggleCounterHandler = () => {
    dispatch({type: 'toggle', showToggle: show})
  };

  const incrementHandler = () => {
    dispatch({type: 'increment', showToggle: show})
  }

  const decrementHandler = () => {
    dispatch({type: 'decrement', showToggle: show})
  }

  const increaseHandler = () => {
    dispatch({type: 'increase', amount: 5, showToggle: show})
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