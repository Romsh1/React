// Day 30
// import { Fragment, MouseEvent } from "react";
interface Props {
    items: string[];
    heading: string;
}

import { useState } from "react";

function ListGroup(props: Props) {

    let items = [
        'New York',
        'London',
        'Ghorahi',
        'Kathmandu',
        'Dubai'
    ];

    //to highlight particular items
    // let selectedIndex = 0;

    //Hook
    const [selectedIndex, setSelectedIndex] = useState(-1); 
    // items = [];

    //Event handler
    // const handleClick = (event: MouseEvent) => console.log(event);

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
                    {items.map((item, index) => (
                        <li 
                            className={selectedIndex === index ? "list-group-item active" : "list-group-item"} 
                            key={item} 
                            onClick={() => {setSelectedIndex(index);}}
                            >{item}
                        </li>
                    ))}                
                </ul>
            </>
            );
}

export default ListGroup