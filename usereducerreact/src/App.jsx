import { useReducer, useState } from 'react'
import viteLogo from '/vite.svg'

function App() {
  //using bank account example to learn useReducer() hook
  const [state, dispatch] = useReducer(reducer, { balance: 0 });
  const [amount, setAmount] = useState(0);

  function reducer(state, action) {
    if (action.type === "add") {
      return {...state, balance: state.balance + action.payload};
    }

    if (action.type === "subtract") {
      return {...state, balance: state.balance - action.payload};
    }
  }

  return (
    <div>
      <input type='text' onChange={(e) => setAmount(e.target.value)} value={amount} />
      {state.balance}
      <button onClick={() => dispatch( {type: "add", payload: Number(amount)} )}>Deposit</button>
      <button onClick={() => dispatch( { type: "subtract", payload: Number(amount)} )}>Withdraw</button>
    </div>
  );
}

/*
function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0, incrementBy: 2});
  function reducer(state, action) {
    if (action.type === "increment") {
      return {...state, count: state.count + action.payload }
      //return state + action.payload;
    }
    if (action.type === "decrement") {
      return { ...state, count: state.count - action.payload }
    }
    if (action.type === "setIncrement") {
      return {...state, incrementBy: action.payload}
    }
    if (action.type === "setDecrement") {
      return {...state, incrementBy: action.payload}
    }
  }

  return (
    <div>
      {state.count}
      <input type='text' value={state.incrementBy} onChange={(e) => dispatch({ type: "setIncrement", payload: Number(e.target.value) })} />
      <button onClick={() => dispatch({ type: "increment", payload: state.incrementBy})}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement", payload: state.incrementBy})}>Decrement</button>
    </div>
  );
}
*/

export default App
