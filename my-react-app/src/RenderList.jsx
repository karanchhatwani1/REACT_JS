function RenderList(){

    const fruits = ["apple", "banana", "mango"];

    const listItems = fruits.map((fruit, index) => <li key={index}>{fruit}</li>);

    const fruitsObject = [{id:"1", name:"apple", calorie:40},
                          {id:"2", name:"banana", calorie:95},
                          {id:"3", name:"Lichi", calorie:30}];

    //fruitsObject.sort((a, b) => b.name.localeCompare(a.name));
    fruitsObject.sort((a, b) => a.calorie - b.calorie);
    const lowCalFruits = fruitsObject.filter((fruit) => fruit.calorie > 50);

    const objectListItems = lowCalFruits.map((fruit) => <li key={fruit.id}>{fruit.name} {fruit.calorie}</li>);

    return (
       
        <div>
            <ul>{objectListItems}</ul>
            <ul>{listItems}</ul>
        </div>
        
        
    );
}

export default RenderList