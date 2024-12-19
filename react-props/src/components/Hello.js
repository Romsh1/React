function Hello({ person }) {
    //destructured names must be same as obj name
    return (
        <div>
            <h1>{person.message} {person.name} {person.seatNumbers}</h1>
        </div>
    );
}
export default Hello;