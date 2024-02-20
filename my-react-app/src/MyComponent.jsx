// import React, {useState} from 'react';

// function MyComponent(){
//     //useState function returns an array with 2 elements, a variable and a setter func
//     const [name, setName] = useState("Guest");
//     const [age, setAge] = useState(0);
//     const [isEmployed, setIsEmployed] = useState(false);

//     const updateName = () => {
//         setName("Spongebob");
//     }

//     const incrementAge = () => {
//         setAge(age + 1);
//     }

//     const toggleEmployedStatus = () => {
//         setIsEmployed(!isEmployed);
//     }

//     return(<div>
//                 <p>Name: {name}</p>
//                 <button onClick={updateName}>Set Name</button>
//                 <p>Age: {age}</p>
//                 <button onClick={incrementAge}>Increment Age</button>
//                 <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
//                 <button onClick={toggleEmployedStatus}>Change Status</button>
//             </div>);
// }



//onChange eventhandler
// import React, {useState} from "react";
// function MyComponent(){
//     const [name, setName] = useState("");
//     const [quantity, setQuantity] = useState(1);
//     const [comment, setComment] = useState("");
//     const [payment, setPayment] = useState("");
//     const [shipping, setShipping] = useState("");

//     //Handler function
//     function handleNameChange(event){
//         setName(event.target.value);
//     }

//     function handleQuantityChange(event){
//         setQuantity(event.target.value);
//     }

//     function handleCommentChange(event){
//         setComment(event.target.value);
//     }

//     function handlePaymentChange(event){
//         setPayment(event.target.value);
//     }

//     function handleShippingChange(event){
//         setShipping(event.target.value);
//     }

//     return(<div>
//                 <input value={name} onChange={handleNameChange}/>
//                 <p>Name: {name}</p>

//                 <input value={quantity} onChange={handleQuantityChange} type="number"/>
//                 <p>Quantity: {quantity}</p>

//                 <textarea value={comment} onChange={handleCommentChange} 
//                 placeholder="Enter delivery instructions here"/>
//                 <p>Comment: {comment}</p>

//                 <select value={payment} onChange={handlePaymentChange}>
//                     <option value="">Select an option</option>
//                     <option value="visa">Visa</option>
//                     <option value="Mastercard">Mastercard</option>
//                     <option value="Giftcard">Giftcard</option>
//                 </select>
//                 <p>Payment: {payment}</p>

//                 <label>
//                     <input type="radio" value="Pick-up" checked={shipping === "pick-up"}
//                     onChange={handleShippingChange}/>
//                     Pick Up
//                 </label>

//                 <label>
//                     <input type="radio" value="Delivery" checked={shipping === "delivery"}
//                     onChange={handleShippingChange}/>
//                     Delivery
//                 </label>

//                 <p>Shipping: {shipping}</p>
//             </div>);
// }


//Updater function
// import React, {useState} from "react";
// function MyComponent(){
//     const[count, setCount] = useState(0);

//     function increment(){
//         //Taking pending state to calculate next step
//         setCount(c => c + 1);
//         setCount(c => c + 1);
//         setCount(c => c + 1);
//         setCount(c => c + 1);
//     }

//     function decrement(){
//         setCount(c => c - 1);
//         setCount(c => c - 1);
//         setCount(c => c - 1);
//         setCount(c => c - 1);
//     }

//     function reset(){
//         setCount(0);
//     }

//     return(<div className="counter-container">
//                 <p className="count-display">{count}</p>
//                 <button className="counter-button" onClick={decrement}>Decrement</button>
//                 <button className="counter-button" onClick={reset}>Reset</button>
//                 <button className="counter-button" onClick={increment}>Increment</button>
//             </div>);
// }



//Update objects in state
// import React, {useState} from "react";
// function MyComponent(){
//     const [car, setCar] = useState({year: 2024,
//                                      make: "Ford", 
//                                      model: "Mustang"});

//     function handleYearChange(event){
//         setCar(c => ({...c, year: event.target.value}));
//     }

//     function handleMakeChange(event){
//         setCar(c => ({...c, make: event.target.value}));
//     }

//     function handleModelChange(event){
//         setCar(c => ({...c, model: event.target.value}));
//     }


//     return(<div>
//                 <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
//                 <input type="number" value={car.year} onChange={handleYearChange}/><br/>
//                 <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
//                 <input type="text" value={car.model} onChange={handleModelChange}/><br/>

//             </div>);
// }



// import React, {useState} from "react";
// function MyComponent(){
//     const [foods, setFoods] = useState(["Apple", "Banana", "Mango"]);

//     function handleAddFood(){
//         const newFood = document.getElementById("foodInput").value;
//         document.getElementById("foodInput").value = "";

//         setFoods(f => [...foods, newFood]);
//     }

    function handleRemoveFood(index){
        setFoods(foods.filter((_, i) => i !== index));
    }

//     return(<div>
//             <h2>List of Food</h2>
//             <ul>
//                 {foods.map((food, index) => 
//                 <li key={index} onClick={() => handleRemoveFood(index)}>
//                     {food}
//                 </li>)}
//             </ul>
//             <input type="text" id="foodInput" placeholder="Enter food name"/>
//             <button id="btn" onClick={handleAddFood}>Add Food</button>
//     </div>);
// }

import React, {useState} from "react";
function MyComponent(){
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar(){
        const newCar = {year: carYear, 
                        make: carMake, 
                        model: carModel};

        setCars(c => [...c, newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCar(index){
        setCars(c => c.filter((_, i) => i !== index));
    }

    function handleYearChange(event){
        setCarYear(event.target.value);
    }

    function handleMakeChange(event){
        setCarMake(event.target.value);
    }

    function handleModelChange(event){
        setCarModel(event.target.value);
    }


    return (<div>
                <h2>List of Car objects</h2>
                <ul>
                    {cars.map((car, index) => 
                        <li key={cars.index} onClick={() => handleRemoveCar(index)}> {car.year} {car.make} {car.model}
                        </li>)}
                </ul>
                <input type="number" value={carYear} onChange={handleYearChange}/><br/>
                <input type="text" value={carMake} onChange={handleMakeChange} 
                    placeholder="Enter car make"/><br/>
                <input type="text" value={carModel} onChange={handleModelChange} 
                    placeholder="Enter car model"/><br/>
                <button onClick={handleAddCar}>Add Car</button>
            </div>);
}

export default MyComponent;