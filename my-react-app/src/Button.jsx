
// function Button() {
//     const styles = {
//         backgroundColor: "hsl(200, 100%, 50%)",
//         color: "white",
//         padding: "10px 20px",
//         borderRadius: "5px",
//         border: "none",
//         cursor: "pointer",      
//     }

//     return(<button style={styles}>Click me</button>);
// }


//Click events
// function Button () {
//     //Event param
//     const handleClick = (e) => e.target.textContent = "Ouch";

//     return(<button onDoubleClick={(e) => handleClick(e)}>Click me</button>);


    //PASSING PARAMETERS IN FUNCTION
    // let count = 0;
    // const handleClick = (name) => {
    //     if (count < 3) {
    //         count++;
    //         console.log(`${name} you clicked me ${count} time/s`);
    //     } else {
    //         console.log(`${name} stop clicking me!`);
    //     }
    // };

    // return(<button onClick={() => handleClick("ROMS")}>Click me</button>);


    // const handleClick2 = (name) => console.log(`${name} stop clicking me`);
    // return(<button onClick = {handleClick} className="btn">Click me</button>);

//Passing args to a func
    // return(<button onClick = {() => handleClick2("Rom")} className="btn">Click me</button>);
// }

// export default Button