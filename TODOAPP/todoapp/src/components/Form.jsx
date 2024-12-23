import { useState } from "react";

export default function Form({ todos, setTodos }) {
    //storing every to do list as an array
    // const [todo, setTodo] = useState("");

    //storing every to do list as obj
    const [todo, setTodo] = useState({name:"", done:false});
    
    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo({name:"", done: false});
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    onChange={(e) => setTodo({name: e.target.value, done: false})} 
                    value={todo.name} type="text" />
                    
                <button type="submit">Add</button>
            </form>
        </>
    );
}