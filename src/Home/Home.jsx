import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Tshirt from "../Tshirt/Tshirt";
import Cart from "../Cart/Cart";
import "./Home.css";

const Home = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (tshirt) => {
    console.log(tshirt);
    const newCart = [...cart, tshirt];
    setCart(newCart);
  };

  const handleRemoveFromCart = (id) => {
    const remaining = cart.filter((ts) => ts._id !== id);
    setCart(remaining);
  };

  const tShirts = useLoaderData();
  console.log(tShirts);
  return (
    <div className="tshirts__container">
      <div className="tshirt__container">
        {tShirts.map((tShirt) => (
          <Tshirt
            key={tShirt._id}
            tShirt={tShirt}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div>
        <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
      </div>
    </div>
  );
};

export default Home;
