import UseContext2 from "./UseContext2";
import React, {useState, useContext, createContext} from "react";

export const UserContext = createContext();

function UseContext1(){
    const [name, setName] = useState("Karan");

    return (
        <>
            <div className="box">
                <h1>ComponentA</h1>
                <h2>Hello : {name}</h2>
                <UserContext.Provider value={name}>
                <UseContext2 />
                </UserContext.Provider>
            </div>
        </>
    );
}

export default UseContext1