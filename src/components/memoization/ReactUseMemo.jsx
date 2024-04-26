import { useMemo, useState } from "react";

const numsArr = new Array(30_000_000).fill(0).map((_, index) => {
    return {
        pos: index,
        isMagical: index === 29_000_000
    }
}) // Huge Array and transform it ...

const ReactUseMemo = () => {
    const [count, setCount] = useState(0)
    const [numbers, setNumbers] = useState(numsArr);
    // const findMagical = numbers.find(item => item.isMagical === true); // expensive computation ...
    const findMagical = useMemo(() => numbers.find(item => item.isMagical === true), [numbers]);
    return (
        <>
            <div>
                Numbers: {findMagical.pos}
            </div>
            <div className="card">
                <button onClick={() => {
                    setCount((count) => count + 1)
                    if (count === 10) {
                        setNumbers(new Array(10_000_000).fill(0).map((_, index) => {
                            return {
                                pos: index,
                                isMagical: index === 9_000_000
                            }
                        }))
                    }
                }}>
                    count is {count}
                </button>
            </div>
        </>
    )
}

export default ReactUseMemo