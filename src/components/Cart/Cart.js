import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { img, name, description, time, age } = props.cart;
  const { handleAddToList } = props;

  return (
    <div>
      <div className="cart-info">
        <img src={img} alt="" />
        <h3>{name}</h3>
        <p>{description.slice(0, 300)}</p>
        <h5>{age}</h5>
        <h5>{time}</h5>
        <button
          onClick={() => {
            handleAddToList(props.cart);
          }}
          className="add-btn"
        >
          Add To List
        </button>
      </div>
    </div>
  );
};

export default Cart;
