import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0); 
    const [incrementBy, setIncrementBy] = useState(1);

    function incHandleClick() {
        setCount(count + 1);
    }
    function decHandleClick() {
        setCount(count - 1);
    }
    function handleReset() {
        setCount(0);
    }
    function increaseIncrement() {
        setIncrementBy(incrementBy + 1);
    }
    function decreaseIncrement() {
        setIncrementBy(incrementBy - 1);
    }
    return (
        <div>
            <h1>Count value is: {count}</h1>
            <button onClick={incHandleClick}>Increment</button>
            <button onClick={decHandleClick}>Decrement</button>
            <button onClick={handleReset}>Reset</button>

            <h1>We are incrementing the value by: {incrementBy}</h1>
            <button onclick={increaseIncrement}>Increase Increment</button>
            <button onclick={decreaseIncrement}>Decrease Increment</button>
        </div>
    );
}