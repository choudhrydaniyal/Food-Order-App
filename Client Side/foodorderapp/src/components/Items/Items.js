import MealsSummary from "../Meals/MealsSummary";
import classes from "./items.module.css";
import cheezyTikka from "../../assets/Cheezy-Tikka.jpg";
import cheeseSticks from "../../assets/Cheese-Sticks.jpg";
import ovenBakedWings from "../../assets/Oven-Baked-Wings.jpg";
import mexicanSandwich from "../../assets/Mexican-Sandwich.jpg";
import FormWrapper from "./FormWrapper";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Cheezy Tikka",
    description: "A Cheezy Fusion! A Cheese Sauce base with Tikka topping.",
    price: 1260,
    image: cheezyTikka,
  },
  {
    id: "m2",
    name: "Cheese Sticks",
    description: "Freshly Baked Bread Filled with the Yummiest Cheese Blend",
    price: 560,
    image: cheeseSticks,
  },
  {
    id: "m3",
    name: "Oven Baked Wings",
    description: "Fresh Oven Baked Wings Tossed In Hot Peri Peri Sauce",
    price: 370,
    image: ovenBakedWings,
  },
  {
    id: "m4",
    name: "Mexican Sandwich",
    description: "Mozzarella Dipped Chicken Topped with Garlic Sauce",
    price: 700,
    image: mexicanSandwich,
  },
];

const Items = () => {
  return (
    <div>
      <MealsSummary />
      <div className={classes.spacing}>
        <div className={classes.cards}>
          {DUMMY_MEALS.map((meal) => (
            <div>
              <div className={classes.card}>
                <div className={classes.image}>
                  <img
                    src={meal.image}
                    height={250}
                    width={250}
                    alt="Item image"
                  ></img>
                </div>
                <div className={classes.name}>
                  <div>{meal.name}</div>
                  <div>Rs {meal.price}</div>
                </div>
                <div className={classes["form-spacing"]}>
                  <FormWrapper
                    key={meal.id}
                    id={meal.id}
                    name={meal.name}
                    description={meal.description}
                    price={meal.price}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Items;
