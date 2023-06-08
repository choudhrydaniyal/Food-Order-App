import { useState } from "react";

import Cart from "../Cart/Cart";
import Header from "../Header/Header";

const Layout = ({children}) => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      {children}
    </div>
  );
};

export default Layout;
