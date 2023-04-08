import React from "react";

const Tshirt = ({ tShirt }) => {
  console.log(tShirt);
  return (
    <div className="tshirt__img">
      <img src={tShirt.picture} alt="" />
    </div>
  );
};

export default Tshirt;
