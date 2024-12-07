import React from "react";

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello</h1>
    //     </div>
    // )

    return React.createElement('div', null, '<h1>', 'Hello')
}

export default Hello