import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import { addProduct } from "../store/slices/cartSlice";
import "./products.css"

function Products(props) {
  const { props: product } = props;
  const dispatch = useDispatch()
  return (
    <div className="product" key={product.id}>
      <Link className="product-link" to={`/products/${product.id}`}>
        <img src={product.image} alt={product.title} />
        <h3>{product.title.slice(0, 30) + "..."}</h3>
        <p>{product.description.slice(0, 100) + "..."}</p>
        {/* <p>{product.description.Length < 100 ? product.description : product.description.slice(0, 100) + "..."}</p> */}
      </Link>
      <div>
        <span>{product.price + "$"}</span>
        <button onClick={() => dispatch(addProduct(product))}>Add To Cart</button>
      </div>
    </div>
  )
}

export default Products;