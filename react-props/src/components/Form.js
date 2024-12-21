import { useState } from "react";

export default function Form() {
    const [name, setName] = useState({firstname: "", lastname: ""});

    // function handleChange(e) {
    //     setName(e.target.value);
    // }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(name);
    }

    return (
        <div>
            <form>
                <input 
                    onChange={(e) => setName({...name, firstname: e.target.value})}
                    type="text" 
                    value={name.firstname} 
                />
                <input 
                    onChange={(e) => setName({...name, lastname: e.target.value})}
                    type="text" 
                    value={name.lastname} 
                />
                <button onClick={(e) => handleSubmit(e)}>Add</button>
            </form>
        </div>
    );
}