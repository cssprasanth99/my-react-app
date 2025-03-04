// Counter.js
import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h1>Counter</h1>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <br/>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Counter;
