import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import SideSection from "../SideSection/SideSection";
import "./GymCart.css";

const GymCart = () => {
  const [carts, setCarts] = useState([]);
  const [cat, setCart] = useState([]);
  // console.log(cat);
  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, []);

  const handleAddToList = (fullCart) => {
    const newCat = [...cat, fullCart];
    setCart(newCat);
    // console.log(newTime);
  };
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
            <Cart
              key={cart.id}
              cart={cart}
              handleAddToList={handleAddToList}
            ></Cart>
          ))}
        </div>
      </div>
      <div className="side-section">
        <SideSection cat={cat}></SideSection>
      </div>
    </div>
  );
};

export default GymCart;
