// useMemo() hook returns a memoized value 
// 
import { useMemo, useState } from "react"

const ReactUseMemoEx2 = () => {
    const [todos, setTodos] = useState([]);
    const [count, setCount] = useState(0);
    // const expensiveRes = expensiveCal(count); // without using useMemo() hook ...
    const expensiveRes = useMemo(() => expensiveCal(count), [count]);
    return (
        <div>
            <div>
                <h1>Count: {count}</h1>
                <button onClick={() => setCount(count + 1)}>Increment Count</button>
            </div>
            <div style={{margin: '10px 0px'}}>
                {
                    todos?.length !== 0 && todos?.map((todo, index) => (
                        <p key={index}>
                            {
                                todo
                            }
                        </p>
                    ))
                }
                <button onClick={() => setTodos(prevTodos => [...prevTodos, 'Todo Added'])}>Add TODO</button>
            </div>
            <div>
                <h1>Expensive Calculation Res: {expensiveRes}</h1>
            </div>
        </div>
    )
}

const expensiveCal = count => {
    console.log('calculating expensive operation...');
    for (let i = 0; i < 100000; i++) {
        count++;
    }
    return count;
}
export default ReactUseMemoEx2