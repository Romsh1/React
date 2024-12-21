export default function TodoItem({ item }) {
    return (
        <div>
            <div>{item}</div>
            <span>
                <button>❌</button>
            </span>
        </div>
    );
}