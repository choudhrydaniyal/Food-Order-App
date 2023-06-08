import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim().length === 0;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    house: true,
    street: true,
    city: true,
  });

  const nameInputRef = useRef();
  const houseInputRef = useRef();
  const streetInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredHouse = houseInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredHouseIsValid = !isEmpty(enteredHouse);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputsValidity({
      name: enteredNameIsValid,
      house: enteredHouse,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredHouseIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }
    
    props.onConfirm({
      name: enteredName,
      house: enteredHouse,
      street: enteredStreet,
      city: enteredCity,
    });
  };

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? "" : classes.invalid
  }`;
  const houseControlClasses = `${classes.control} ${
    formInputsValidity.house ? "" : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    formInputsValidity.street ? "" : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    formInputsValidity.city ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef}></input>
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={houseControlClasses}>
        <label htmlFor="house">House</label>
        <input type="text" id="house" ref={houseInputRef}></input>
        {!formInputsValidity.house && <p>Please enter a valid house number!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef}></input>
        {!formInputsValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef}></input>
        {!formInputsValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit} type="submit">
          Confirm Order
        </button>
      </div>
    </form>
  );
};

export default Checkout;
