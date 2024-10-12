import React, {useState} from "react";

function StateObjects(){
    const [car, setCar] = useState({year: 2025,
                                    model: "Ford",
                                    make: "me"});

    function handleCarYear(event){
        setCar(car => ({...car, year: event.target.value}));
    }

    function handleCarModel(event){
        setCar(car => ({...car, model: event.target.value}));
    }

    function handleCarMake(event){
        setCar(car => ({...car, make: event.target.value}));
    }

    return (
        <>
            <div>
                <p>Your favourite car is : {car.year} {car.make} {car.model}</p>
                <input onChange={handleCarYear}></input>
                <input onChange={handleCarModel}></input>
                <input onChange={handleCarMake}></input>
            </div>
        </>
    );
}

export default StateObjects