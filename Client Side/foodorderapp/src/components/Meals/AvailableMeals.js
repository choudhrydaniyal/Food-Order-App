import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [mealData, setMealData] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      let response = await axios.get("http://localhost:3005/meals");
      console.log(response.data);
      let data = response.data;

      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }

      setMealData(loadedMeals);
    };

    fetchMeals();
  }, []);

  const mealsList = mealData.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
      <Link to="/items" className={classes.link}>
        <div className={classes["small-card"]}>+ Show all items</div>
      </Link>
    </section>
  );
};

export default AvailableMeals;
