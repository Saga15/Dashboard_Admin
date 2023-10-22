import React, { useEffect, useState } from "react";
import { add } from "../Store/cartSlice";
import { useDispatch } from "react-redux";

function Products() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);



useEffect(()=>{
  async function  fetchData() {
    const res = await fetch("https://fakestoreapi.com/products")
    const data= await res.json()
    console.log(data);
    setProducts (data);
  };
  fetchData()
},[])

  

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>

          <button onClick={() => handleAdd(product)} className="btn">
            ADD TO CART
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
