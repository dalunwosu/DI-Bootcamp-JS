import {useState} from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';
import { increaseCount, decreaseCount } from '../actions';

const Counter = (props) => {
  const count = useSelector((state)=> state.count);
  const dispatch = useDispatch()
  return (
    <div id='root'>
        <div>
      <button onClick={()=>dispatch(increaseCount())}> + </button>
       <span>{count}</span> 
      <button onClick={()=>dispatch(decreaseCount())}> - </button>
      </div>
    </div>
  )
}
export default Counter;