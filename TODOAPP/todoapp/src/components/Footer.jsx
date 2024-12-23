export default function Footer({completedTodos, totalTodos}) {
    return (
        <div>
            <span>Completed Todos:{completedTodos}</span>
            <span>Total todos: {totalTodos}</span>
        </div>
    );
}