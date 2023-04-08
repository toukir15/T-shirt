import React from "react";

const Tshirt = ({ tShirt, handleAddToCart }) => {
  // console.log(handleAddToCart);
  const { id, name, price, picture } = tShirt;
  return (
    <div className="tshirt__img">
      <img src={picture} alt="" />
      <h3>Name: {name}</h3>
      <p>Price: {price}</p>
      <button onClick={() => handleAddToCart(tShirt)} className="buy__now">
        Buy Now
      </button>
    </div>
  );
};

export default Tshirt;
