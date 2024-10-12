import React, {useState} from "react";

function UseState(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);

    const updateUserName = () => {
        setName("Karan");
    };

    const incrementAge = () => {
        setAge(age + 1);
    }

    return (
        <>
            <div>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <button onClick={updateUserName}>Set Name</button>
                <button onClick={incrementAge}>Increase Age</button>
            </div>
        </>
    );
}

export default UseState