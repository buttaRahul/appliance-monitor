import React, { useReducer } from "react";
import "./counter.css"

import reducer from "./counter-reducer";
function Counter() {

    const initialState = {
        count:0,
        step:1
    };
    
    

    const [state,dispatch] = useReducer(reducer,initialState);


    const handleIncrement = () => {
        dispatch({type:"INCREMENT"})
    };
    const handleDecrement = () => {
        dispatch({type:"DECREMENT"})
    };
    const handleReset = () => {
        dispatch({type:"RESET"})
    };
    const handleStep = () => {
        dispatch({type:"STEP"})
    };

  return (
    <div class="container">
      <div class="counter-container">
        <div class="dec-box">
          <button onClick = {handleDecrement} disabled = {state.count-state.step < 0}>-</button>
        </div>
        <div class="counter-box">
          <span>{state.count}</span>
        </div>
        <div class="inc-box">
          <button onClick = {handleIncrement}>+</button>
        </div>
      </div>
      <div class="reset-container">
        <div class="reset-box">
          <button onClick = {handleReset} >0</button>
        </div>
        <div class="step-box">
          <button onClick = {handleStep}>{state.step}</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
