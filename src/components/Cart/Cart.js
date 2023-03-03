import React from "react";
import "./Cart.css";

const Cart = (props) => {
  console.log(props.cart);
  const { img, name, description, time } = props.cart;
  return (
    <div>
      <div className="cart-info">
        <img src={img} alt="" />
        <h3>{name}</h3>
        <p>{description.slice(0, 300)}</p>
        <h5>{time}</h5>
        <button className="add-btn">Add To List</button>
      </div>
    </div>
  );
};

export default Cart;
