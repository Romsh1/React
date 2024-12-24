import { useEffect, useState } from "react";
import styles from './search.module.css';

const url = 'https://api.spoonacular.com/recipes/complexSearch';
const api_key = '723ca3d062f445ee96de10ea9966fa2e';

export default function Search({ setFoodData }) {
    const [query, setQuery] = useState("pizza");
    
    useEffect(() => {
        async function fetchFood() {
            const res =  await fetch(`${url}?query=${query}&apiKey=${api_key}`);
            const data = await res.json();
            console.log(data.results);
            setFoodData(data.results);
        }
        fetchFood();

        /*
        function demo() {
            console.log('Hi, I am demo!');
        }
        demo();
        //triggers a function inside useEffect (whatever state is passed in dependency) */
    }, [query]);

    return (
        <div className={styles.searchContainer}>
            <input className={styles.input}
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                type="text" />
        </div>
    );
}