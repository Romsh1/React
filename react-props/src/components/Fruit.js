export default function Fruit({ name, price, emoji, soldout }) {
    return (
        <>
            {/* { price >= 20 ?  */}
                <li>
                    {emoji} {name} {price} {soldout ? "soldout" : "" }
                </li>
                
                {/* : ""} */}
            {/* {emoji} {name} {price} */}

        </>
    );
}