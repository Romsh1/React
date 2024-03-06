// Day 30
import { Fragment } from "react";

function ListGroup() {

    let items = [
        'New York',
        'London',
        'Ghorahi',
        'Kathmandu',
        'Dubai'
    ];
    items = [];

    // const message = items.length === 0 ? <p>No item found</p> : null;

    // const getMsg = () => {
    //     return items.length === 0 ? <p>No item found</p> : null
    // }


    return (
            // <ul className="list-group">
            //     <li className="list-group-item active">Cras justo odio</li>
            //     <li className="list-group-item">Dapibus ac facilisis in</li>
            //     <li className="list-group-item">Morbi leo risus</li>
            //     <li className="list-group-item">Porta ac consectetur ac</li>
            //     <li className="list-group-item">Vestibulum at eros</li>
            // </ul>

            <>
                <h1>List</h1>
                {/* {items.length === 0 ? <p>No item found</p> : null} */}
                {items.length === 0 && <p>No item found</p>}
                <ul className="list-group">
                    {items.map((item) => (
                        <li key={item}>{item}</li>
                    ))}                
                </ul>
            </>
            );
}

export default ListGroup