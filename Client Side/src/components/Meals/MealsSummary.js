import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Our user-friendly interface ensures that ordering your favorite meals is
        quick and hassle-free.
      </p>
      <p>
        Experience the convenience of doorstep delivery and savor every bite
        without stepping out.
      </p>
    </section>
  );
};

export default MealsSummary;
