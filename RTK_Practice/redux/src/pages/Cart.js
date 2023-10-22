import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../Store/cartSlice";

function Cart() {
  const products = useSelector((state) => state.sagar);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(remove(productId));
}
  return (
    <div className="cartWrapper">
      Cart
      <h3> CART</h3>
      {products.map((product) => (
        <div className="cartCard" key={product.id}>
          <img src={product.image}  alt=""/>
          <h4>{product.title}</h4>
          <h4>{product.price}</h4>
          <button className="btn" onClick={() => handleRemove(product.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
