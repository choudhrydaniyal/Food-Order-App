import CartContext from "../../store/cart-context";
import { useContext } from "react";
import MealItemForm from "../Meals/MealItem/MealItemForm";

const FormWrapper = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <div>
      <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
    </div>
  );
};

export default FormWrapper;
