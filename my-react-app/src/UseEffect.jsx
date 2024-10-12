import React, {useEffect, useState} from "react";

function UseEffect(){

    const [count, setCount] = useState(0);

    function handleCount(){
        setCount(c => c + 1);
    }

    //When page re-renders
    useEffect(() => {
        document.title = `Count: ${count}`;
    });

    //when component mounts
    /*useEffect(() => {
        document.title = `Count: ${count}`;
    }, []);*/

    //When value of count changes
    /*useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);*/

    return (
        <>
            <div>
                <p>Count : {count}</p>
                <button onClick={handleCount}>Add</button>
            </div>
        </>
    );
}

export default UseEffect