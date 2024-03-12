"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
    const [mealIdeas, setMealIdeas] = useState([]);

    useEffect(() => {
        const fetchMealIdeas = async () => {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            const data = await response.json();
            setMealIdeas(data.meals || []);
        };

        if (ingredient) {
            fetchMealIdeas();
        } else {
            setMealIdeas([]);
        }
    }, [ingredient]);

    return (
        <div>
            <h1 className="text-4xl font-semibold m-4">Meal Ideas</h1>
            {mealIdeas.length > 0 ? (
                <ul className="text-xl font-medium text-black">
                    {mealIdeas.map((idea) => (
                        <li key={idea.idMeal}>
                            <p className="text-blue-700">{idea.strMeal}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-xl font-medium text-black">No meal ideas found for {ingredient}</p>
            )}
        </div>
    );
}
