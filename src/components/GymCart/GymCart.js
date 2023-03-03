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
        <div className="title-name">
          <h2>
            <small className="g">G</small>ym <small className="c">C</small>afe
          </h2>

          <img
            className="title-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLcJmaIocmLUfPpkcfmw4LOMBHt6nA_VBfTk3kR6sL6rSf6l2mEpinXQUZWracIwipUjo&usqp=CAU"
            alt=""
          />
        </div>
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
