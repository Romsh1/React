import { useState } from "react";
import { useEffect } from "react";
import styles from './foodDetails.module.css';
import ItemList from "./ItemList.jsx";

export default function FoodDetails({ foodId }) {
    const [food, setFood] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const url = `https://api.spoonacular.com/recipes/${foodId}/information`;
    const api_key = '723ca3d062f445ee96de10ea9966fa2e';

    useEffect(() => {
        async function fetchFood() {
            const res = await fetch(`${url}?apiKey=${api_key}`);
            const data = await res.json();
            console.log(data);
            setFood(data);
            setIsLoading(false);
        }
        fetchFood();
    }, [foodId]);

    return (
        <div>
            <div className={styles.recipeCard}>
                <h1 className={styles.recipeName}>{food.title}</h1>
                <img className={styles.recipeImg} src={food.image} alt="" />
                <div className={styles.recipeDetails}>
                    <span>
                        <strong>⏱️{food.readyInMinutes} Minutes</strong>
                    </span>
                    <span>
                        <strong>
                            👨‍👩‍👧‍👦 Serves {food.servings}
                        </strong>
                    </span>
                    <span>
                        <strong>
                            {food.vegetarian ? "🥦 Vegetarian" : "🍗 Non-vegetarian"}
                        </strong>
                    </span>
                    <span>
                        <strong>
                            🐄 {food.vegan ? "Vegan" : ""}
                        </strong>
                    </span>
                </div>
                <div>
                    $<span>
                        <strong>
                            {(food.pricePerServing/100).toFixed(2)} Per serving
                        </strong>
                    </span>
                </div>

                <h2>Ingredients</h2>
                <ItemList food={food} isLoading={isLoading} />
                {/* Not working for some reasons.  */}
                {/* {food.extendedIngredients.map((item) => (
                    <div>
                        <h3>{item.name}</h3>
                        <h3>{item.amount}{item.unit}</h3>
                    </div>
                ))} */}

                <h2>Instructions</h2>
                <div className={styles.recipeInstructions}>
                    <ol>
                        {isLoading ? (
                            <p>Loading...</p> 
                        ) : (
                            food.analyzedInstructions[0].steps.map((step) => (<li>{step.step}</li>))
                        )}
                    </ol>
                </div>
            </div>
        </div>
    );
}