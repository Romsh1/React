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
import React, {useState} from "react";
function MyComponent(){
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    //Handler function
    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }

    return(<div>
                <input value={name} onChange={handleNameChange}/>
                <p>Name: {name}</p>

                <input value={quantity} onChange={handleQuantityChange} type="number"/>
                <p>Quantity: {quantity}</p>

                <textarea value={comment} onChange={handleCommentChange} 
                placeholder="Enter delivery instructions here"/>
                <p>Comment: {comment}</p>

                <select value={payment} onChange={handlePaymentChange}>
                    <option value="">Select an option</option>
                    <option value="visa">Visa</option>
                    <option value="Mastercard">Mastercard</option>
                    <option value="Giftcard">Giftcard</option>
                </select>
                <p>Payment: {payment}</p>

                <label>
                    <input type="radio" value="Pick-up" checked={shipping === "pick-up"}
                    onChange={handleShippingChange}/>
                    Pick Up
                </label>

                <label>
                    <input type="radio" value="Delivery" checked={shipping === "delivery"}
                    onChange={handleShippingChange}/>
                    Delivery
                </label>

                <p>Shipping: {shipping}</p>
            </div>);
}
export default MyComponent