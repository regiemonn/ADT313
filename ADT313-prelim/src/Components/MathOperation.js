// src/components/MathOperation.js
import React, { useReducer } from 'react';

const mathReducer = (state, action) => {
switch (action.type) {
case 'SET_NUM1':
return { ...state, num1: action.num1 };
case 'SET_NUM2':
return { ...state, num2: action.num2 };
case 'ADD':
return { ...state, result: state.num1 + state.num2 };
case 'SUBTRACT':
return { ...state, result: state.num1 - state.num2 };
case 'MULTIPLY':
return { ...state, result: state.num1 * state.num2 };
case 'DIVIDE':
return { ...state, result: state.num1 / state.num2 };
default:
return state;
}
};

const MathOperation = () => {
const [state, dispatch] = useReducer(mathReducer, { num1: 0, num2: 0, result: 0 });

return (
<div>
<h1>Math Operation</h1>
<input
type="number"
value={state.num1}
onChange={(e) => dispatch({ type: 'SET_NUM1', num1: +e.target.value })}
/>
<input
type="number"
value={state.num2}
onChange={(e) => dispatch({ type: 'SET_NUM2', num2: +e.target.value })}
/>
<button onClick={() => dispatch({ type: 'ADD' })}>Add</button>
<button onClick={() => dispatch({ type: 'SUBTRACT' })}>Subtract</button>
<button onClick={() => dispatch({ type: 'MULTIPLY' })}>Multiply</button>
<button onClick={() => dispatch({ type: 'DIVIDE' })}>Divide</button>
<h2>Result: {state.result}</h2>
</div>
);
};

export default MathOperation;
