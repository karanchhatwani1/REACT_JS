function ClickHandle(){

    const handleClick = () => console.log("Clciked");
    const handleClick2 = (name) => console.log(`${name} "Clicked"`);
    const handleClick3 = (event) => event.target.textContent = 'Ouch!';
    return (
        <>
            <button onClick={(e) => handleClick3(e)}>Click me</button>
        </>
    );
}

export default ClickHandle