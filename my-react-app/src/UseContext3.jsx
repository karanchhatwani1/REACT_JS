import React, {useContext} from "react";
import {UserContext} from "./UseContext1";
function UseContext3(){
    const user = useContext(UserContext);

    return (
        <>
            <div className="box">
                <h1>ComponentC</h1>
                <h1>Bye {user}</h1>
            </div>
        </>
    );
}

export default UseContext3