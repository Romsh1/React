// Day 16
// Rendering list
// import PropTypes from 'prop-types'

// function List(props) {
//     const category = props.category;
//     const itemList = props.items;
//     const listItems = itemList.map(items => <li key={items.id}>
//         {items.name}: &nbsp;
//         <b> {items.calories}</b></li>);
//     return(<>
//                 <h3 className="list-category">{category}</h3>
//                 <ol className="list-items">{listItems}</ol>
//             </>);


    // const fruits = [{id:1,name: "apple", calories: 95},
    //                 {id:2, name: "banana", calories: 45} ,
    //                 {id:3,name: "conconut", calories: 105},
    //                 {id:4,name: "mango", calories: 159} ,
    //                 {id:5,name: "orange", calories: 37}];
    // fruits.sort((a, b) => a.name.localeCompare(b.name));    //ALPHABETICAL
    // fruits.sort((a, b) => b.name.localeCompare(a.name));    //REVERSE ALPHABETICAL
    // fruits.sort((a, b) => a.calories - b.calories); //NUMERIC
    // fruits.sort((a, b) => b.calories - a.calories); //REVERSE NUMERIC


    //REDUCE METHOD
    // const highCalorie = fruits.filter(fruit => fruit.calories >= 100);
    // const listItems = highCalorie.map(highCalorie => <li key={highCalorie.id}>
    //                                     {highCalorie.name}: &nbsp;
    //                                     <b>{highCalorie.calories}</b></li>);
    // return(<ol>{listItems}</ol>);


    // //MAP METHOD
    // const listItems = fruits.map(fruit => <li key={fruit.id}>
    //                                         {fruit.name}: &nbsp;
    //                                         <b> {fruit.calories}</b></li>);
    // return(<ol>{listItems}</ol>);
}
// List.PropTypes = {
//     category: PropTypes.string,
//     items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
//     name: PropTypes.string,
//     categories: PropTypes.number})),
// }
// List.defaultProps = {
//     category: "Category",
//     items: []
// }

export default List 