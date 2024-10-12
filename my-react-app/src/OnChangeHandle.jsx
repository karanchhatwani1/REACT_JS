import React, {useState} from "react";

function OnChangeHandle(){

    const [name, setName] = useState();
    const [comment, setComment] = useState();
    const [payment, setPayment] = useState();

    function handleOnChange(event){
        setName(event.target.value);
    }

    function handleComment(event){
        setComment(event.target.value);
    }

    function handlePayment(event){
        setPayment(event.target.value);
    }

    return (
        <>
            <div>
                <input onChange={handleOnChange}></input>
                <p>Name: {name}</p>

                <textarea onChange={handleComment} placeholder="Enter Instructions"></textarea>
                <p>Comment: {comment}</p>

                <select onChange={handlePayment}>
                    <option>Select an option</option>
                    <option value="Visa">Visa</option>
                    <option value="UPI">UPI</option>
                    <option value="Cash">Cash</option>
                </select>

                <p>Payment Method : {payment}</p>
            </div>
        </>
    );
}

export default OnChangeHandle