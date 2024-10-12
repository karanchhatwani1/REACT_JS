import { useState } from "react";

function StateArrayObjects(){
    const [car, setCar] = useState([]);
    const [carYear, setCarYear] = useState();
    const [carModel, setCarModel] = useState();
    const [carMake, setCarMake] = useState();

    function handleAddCar(){
        const newCar = {year: carYear,
                        make: carMake,
                        model: carModel};

        setCar(c => [...c, newCar]);
    }

    function handleCarYear(event){
        setCarYear(event.target.value); 
    }

    function handleCarMake(event){
        setCarMake(event.target.value);
    }

    function handleCarModel(event){
        setCarModel(event.target.value);
    }

    return (
        <>
            <div>
                <ul>
                    {car.map((cars, index) => <li key={index}>{cars.year} {cars.make}</li>)}
                </ul>
                <input type="number" onChange={handleCarYear}></input>
                <input type="text" onChange={handleCarMake}></input>
                <input type="text" onChange={handleCarModel}></input>
                <button onClick={handleAddCar}>Add</button>
            </div>
        </>
    );
}

export default StateArrayObjects 