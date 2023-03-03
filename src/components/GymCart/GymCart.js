import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import "./GymCart.css";

const GymCart = () => {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, []);
  return (
    <div className="gymCart-parent-div">
      <div>
        <h2 className="title-name">this is gym cart {carts.length}</h2>
        <div className="carts-map-div">
          {carts.map((cart) => (
            <Cart key={cart.id} cart={cart}></Cart>
          ))}
        </div>
      </div>
      <div>
        <h2>Order Summary</h2>
      </div>
    </div>
  );
};

export default GymCart;
