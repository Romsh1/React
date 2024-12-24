import styles from './foodItem.module.css';

export default function FoodItem({ food, setFoodId }) {
    // function viewRecipe() {
        
    // }

    return (
        <div className={styles.foodItemContainer}>
            <img className={styles.foodItemImage} src={food.image} alt=""/>
            <div className={styles.itemContent}>
                <p className={styles.foodItemName}>{food.title}</p>
            </div>

            <div className={styles.btnContainer}>
                <button 
                    className={styles.recipeItemBtn} 
                    onClick={() => {
                                    console.log(food.id);
                                    setFoodId(food.id);
                                }}>
                    View Recipe
                </button>
            </div>
        </div>
    );
}