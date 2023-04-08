import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>Order Summary: {cart.length}</h2>
      {cart.map((tshirt) => (
        <p key={tshirt.id}>{tshirt.name}</p>
      ))}
    </div>
  );
};

export default Cart;
