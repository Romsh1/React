import Fruit from "./Fruit";

export default function Fruits() {
    //const fruits = ['Apple', 'Banana', 'Orange'];
    const fruits = [
        {
            name: "Apple",
            price: 10,
            emoji: "🍎",
            soldout: true
        },
        {
            name: "Orange",
            price: 15,
            emoji: "🍊",
            soldout: true
        },
        {
            name: "Mango",
            price: 20,
            emoji: "🥭",
            soldout: true
        },
        {
            name: "Kiwi",
            price: 25,
            emoji: "🥝",
            soldout: false
        },
        {
            name: "Cherry",
            price: 30,
            emoji: "🍒",
            soldout: false
        },
    ]
    return (
        <div>
            <ul>
                {fruits.map((fruit) => 
                    (
                        //rendering array of objs in react
                        // <li key={fruit.name}>
                        //     {fruit.emoji} {fruit.name} ${fruit.price}
                        // </li>

                        <Fruit name={fruit.name} price={fruit.price} emoji={fruit.emoji} soldout={fruit.soldout}/>
                    ))}
            </ul>
        </div>
    );
}
