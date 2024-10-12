import React, {useState} from "react";

function StateArray(){

    const [foods, setFoods] = useState(['apple', 'banana', 'amrudh', 'papaya']);

    const handleFood = () => {
        const item = document.getElementById("foodInput").value;
        document.getElementById('foodInput').value = '';

        setFoods(f => [...f, item]);
    }

    function handleRemove(i){
        setFoods(foods.filter((_, index) => index != i));
    }

    return (
        <>
            <div>
                <ul>
                    {foods.map((food, i) => <li key={i} onClick={() => handleRemove(i)}>{food}</li>)}
                </ul>
                <input id="foodInput" placeholder="Enter fruit" type="text"></input>
                <button onClick={handleFood}>Add</button>
            </div>
        </>
    );
}

export default StateArray