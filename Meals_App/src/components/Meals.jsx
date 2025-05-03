import { useState } from "react";
import axios from "axios";
import "../styles.css";

import React from "react";
import { useEffect } from "react";

export default function Meals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setMeals(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const mealsList = meals.map(({ idMeal, strMealThumb, strMeal }) => {
    return (
      <section className="card" key={idMeal}>
        <div className="plate">
          <img src={strMealThumb} alt={strMeal} />
        </div>
        <section className="content">
          <p className="name">{strMeal}</p>
          <p>#{idMeal}</p>
        </section>
      </section>
    );
  });

  return <div className="items-container">{mealsList}</div>;
}
//
