// import Header from './Header.jsx'
// import Footer from './Footer.jsx'
// import Food from './Food.jsx'

import { useEffect } from "react";
import MyComponent from "./MyComponent";
import DigitalClock from "./DigitalClockApp/DigitalClock";

// function App() {
//   return(
//     <>
//       <Header/>
//       <Food/>
//       <Footer/>
//     </>
//   );

// }


//Card Components
// import Card from "./card"
// function App() {
//   return(
//     <>
//       <Card/>
//       <Card/>
//       <Card/>
//       <Card/>
//       <Card/>
//       <Card/>
//       <Card/>
//       <Card/>
//     </>
//   );
// }



//How to style REACT components with css
//not including external frameworks or preprocessors
//1. EXTERNAL
//2. MODULES
//3. INLINE
// import Button from "./Button.jsx"
// function App(){
//   return(
//     <Button />
//   );
// }



// Using props 
// read only properties that are shared between components
// A parent component can send data to a child component

// import Student from "./Student.jsx"
// function App() {
//   return(
//     <>
//       <Student name="Spongebob" age={30} isStudent={true}/>
//       <Student name="Patrick" age={42} isStudent={false}/>
//       <Student name="Asmita" age={25} isStudent={true}/>
//       <Student name="Aman" age={12} isStudent={true}/>
//       <Student name="Karina" age={12} isStudent={true}/>
//       <Student name="Sirjana" age={26} isStudent={true}/>
//       <Student name="Aarosh" age={5} isStudent={true}/>
//     </>
//   );
// }


// import UserGreeting from './UserGreeting.jsx'
// function App() {
//   return(
//     <>
//       <UserGreeting isLoggedIn={true} username="Romika"/>
//     </>
//   );
// }



// Day 16
// Rendering list
// import List from './List.jsx'

// function App() {
//   const fruits = [{id:1,name: "apple", calories: 95},
//                   {id:2, name: "banana", calories: 45} ,
//                   {id:3,name: "conconut", calories: 105},
//                   {id:4,name: "mango", calories: 159} ,
//                   {id:5,name: "orange", calories: 37}];

//   const vegetables = [{id:6,name: "Sinach", calories: 95},
//                       {id:7, name: "Ladys Finger", calories: 45} ,
//                       {id:8,name: "Beans", calories: 89},
//                       {id:9,name: "Chilly", calories: 63} ,
//                       {id:10,name: "Gourd", calories: 37}];


//   return(
//     <>
//         {fruits.length > 0 ? <List items = {fruits} category= "Fruits" /> : null}
//         {vegetables.length > 0 ? <List items = {vegetables} category= "Vegetables" /> : null}
//     </>);
// }


//Click Events
// import Button from "./Button.jsx";
// import ProfilePicture from "./ProfilePicture.jsx";
// function App() {
//   return(<ProfilePicture/>);
// }


// REACT HOOK
// import MyComponent from "./MyComponent.jsx"
// function App() {
//   return(<MyComponent />);
// }



// Counter 
//         App
// import MyComponent from './MyComponent.jsx'
// import Counter from './MyComponent.jsx'

// function App(){
//   return<MyComponent />
// }


// Day 17
// Color Picker App
// import ColorPicker from "./ColorPicker.jsx"

// function App(){
//   return(<ColorPicker />)
// }



// Day 18
// to-do list app
// import ToDoList from "./ToDoList.jsx";
// function App (){
//   return(<ToDoList />);
// }


// // useEffect() -> React hook that tells React do some code when:
// //   - This component re-render
// //   - This component mounts
// //   - This state of a value

//   useEffect(function, [dependencies]);



// Digital
//       Clock
//           App
// import DigitalClock from "./DigitalClockApp/DigitalClock.jsx";
// function App() {
//   return(<DigitalClock />);
// }
// export default App



// import React from "react";
// function App() {
//   return(<>
//             <DigitalClock />
//             <DigitalClock />
//             <DigitalClock />
//             <DigitalClock />
//             <DigitalClock />
//           </>);
// }
// export default App



// useContext() = React hook that allows us to share values
//                 between multiple levels of components without passing
//                 props through each level
import ComponentA from "./ComponentA.jsx";
import React from "react";
function App() {
    return(
              <ComponentA />
          );
}
export default App;