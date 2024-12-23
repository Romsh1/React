import TodoItem from './TodoItem.jsx';

export default function TodoList( { todos, setTodos }) {
    //slice creates copy of the todo array
    const sortedTodos = todos.slice().sort((a,b) => Number(a.done - b.done));

    return (
        <div>
            {sortedTodos.map((item) => (
                <TodoItem key={item.name} item={item} todos={todos} setTodos={setTodos}  />
            ))}
        </div>
    );
}