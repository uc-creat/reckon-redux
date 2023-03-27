import React, { useState } from 'react'
import {createStore} from 'redux';
import {incrementNumber,decrementNumber} from './Actions';
import reducer from './Reducer';

export default function Counter() {

  const store = createStore(reducer);

  const [count,setCount] = useState(0);

  const unsubscribe = store.subscribe(()=>{
    setCount(store.getState().count)
  })

  console.log(unsubscribe)


  return (
    <div>
      <h2>{count}</h2>
      <button onClick={()=>store.dispatch(incrementNumber())}>Like</button>
      <button onClick={()=>store.dispatch(decrementNumber())}>UnLike</button>
    </div>
  )
}
