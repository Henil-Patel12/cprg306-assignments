"use client"

import { useState , useEffect } from "react";

export default function MealIdeas( {ingredient} ) {
    const [mealIdeas, setMealIdeas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMealIdeas = async (ingredient) => {
            setLoading(true);
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
                const data = await response.json();
                setMealIdeas(data.meals || []);
            } catch (error) {
                console.error("Error fetching meal ideas:", error);
            } finally {
                setLoading(false);
            }
        };

        if (ingredient) {
            fetchMealIdeas(ingredient);
        } else {
            setMealIdeas([]);
        }
    }, [ingredient]);

    return (
        <div>
            <h1 className="text-4xl font-semibold m-4">Meal Ideas</h1>
            {loading ? (
                <p>Loading...</p>
            ) : mealIdeas.length > 0 ? (
                <ul className="text-xl font-medium text-black">
                    {mealIdeas.map((idea) => (
                        <li key={idea.idMeal} className="bg-white w-96 hover:bg-slate-700 p-2 border mb-2">
                            <p>{idea.strMeal}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No meal ideas found for {ingredient}.</p>
            )}
        </div>
    );
}
