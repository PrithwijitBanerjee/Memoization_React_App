// useCallback() hooks mainly used to memoized the function which we want not referencially changed during each re-renders...
// useCallback() hooks accepts seconds parameter as dependency array 
// if we give empty dependency array the useCallback() hooks calls that cb function at first renders then freeze/ memoized it forever...
// if we give state variable inside dependency array of the useCallback() hooks then the function will referentially changed when that particular state variable got changed...

import { useCallback, useState } from "react"
import { MemoizedNavbar } from "./Navbar"

const UseCallBackEx1 = () => {
    const [article, setArticle] = useState('good');
    const [count, setCount] = useState(0);
    // const changeArticle = () => {
    //     // setArticle('article changed!!!');
    //     return 'article changed!!!';
    // }

    const changeArticle = useCallback(() => { //freeze the callback function it will not refencially change in each renders ....
        setArticle('article changed!!!');
        return 'article changed!!!';
    }, []);

    // const changeArticle = useCallback(() => { // freeze the callback
    //     // setArticle('article changed!!!');
    //     return 'article changed!!!' + count;
    // }, [count]); // the cb function will referencially changed when we update the count state ...

    return (
        <div>
            <MemoizedNavbar article={article} changeArticle={changeArticle} />
            <div>
                <h2>Count: {count}</h2>
                <button onClick={() => setCount(count + 1)}>Increment Count</button>
            </div>
        </div>
    )
}

export default UseCallBackEx1