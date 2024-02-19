// import Header from './Header.jsx'
// import Footer from './Footer.jsx'
// import Food from './Food.jsx'

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

import Student from "./Student.jsx"
function App() {
  return(
    <>
      <Student name="Spongebob" age={30} isStudent={true}/>
      <Student name="Patrick" age={42} isStudent={false}/>
      <Student name="Asmita" age={25} isStudent={true}/>
      <Student name="Aman" age={12} isStudent={true}/>
      <Student name="Karina" age={12} isStudent={true}/>
      <Student name="Sirjana" age={26} isStudent={true}/>
      <Student name="Aarosh" age={5} isStudent={true}/>
    </>
  );
}


import UserGreeting from './UserGreeting.jsx'
function App() {
  return(
    <>
      <UserGreeting isLoggedIn={true} username="Romika"/>
    </>
  );
}

export default App
