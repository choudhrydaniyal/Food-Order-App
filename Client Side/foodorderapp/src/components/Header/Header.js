import { Fragment } from "react";
import { Link } from "react-router-dom";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <Link to="/" className={classes["link-title"]}>
          <h1>Foodie Express</h1>
        </Link>
        <div className={classes.navigation}>
          <Link to="/" className={classes.link}>
            <p>Home</p>
          </Link>
          <Link to="/items" className={classes.link}>
            <p>Items</p>
          </Link>
          <Link
            to="/login"
            className={classes.link}
            onClick={() => localStorage.removeItem("token")}
          >
            {" "}
            Sign Out
          </Link>
        </div>

        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
