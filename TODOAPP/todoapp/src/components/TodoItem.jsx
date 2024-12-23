export default function TodoItem({ item, todos, setTodos }) {
    function handleDelete(item) {
        //filtering from all todos list
        setTodos(todos.filter((todo) => todo !== item));
    }

    function handleClick(name) {
        const newArray = todos.map((todo) => todo.name === name ? {...todo, done: !todo.done} : todo);
        setTodos(newArray);
        console.log(todos)    
    }

    return (
        <div>
            <span onClick={() => handleClick(item.name)}>{item.name}</span>
            <span>
                <button onClick={() => handleDelete(item)}>❌</button>
            </span>
        </div>
    );
}