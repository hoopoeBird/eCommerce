import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addProduct } from "../store/slices/cartSlice";
import "./productDetails.css";

function ProductDetails() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState();
  const [productRate, setRate] = useState([]);
  const [stars, setStars] = useState(0);
  const params = useParams();
  const getProductId = () => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`).then((res) => res.json()).then(res => setProduct(res));
  }
  useEffect(() => {
    getProductId();
  }, []);
  useEffect(() => {
    if (product) {
      setStars(Math.round((Math.trunc(product.rating.rate) - product.rating.rate) * 10 + 10));
    }
  }, [product]);
  useEffect(() => {
    if (product && stars != 0) {
      for (let rate = 0; rate < product.rating.rate; rate++) {
        if (rate !== Math.trunc(product.rating.rate)) {
          productRate.push(<span className="star" key={rate}>⭐</span>);
        } else {
          productRate.push(<span className="last-star" style={{ width: `${stars*2}px` }} key={rate}>⭐</span>);
        }
      }
    }
  }, [product, stars])
  return (
    <>
      {product &&
        <div className="details">
          <div className="image"><img src={product.image} /></div>
          <div className="descriptions">
            <h2>{product.title}</h2>
            <div className="price-rating">
              <h3>{product.price}$</h3>
              <div className="rating">
                <div className="stars">{productRate}</div>
                <span>{product.rating.rate}</span>
                <span>{product.rating.count}</span>
              </div>
            </div>
            <p>{product.description}</p>
            <button onClick={() => dispatch(addProduct(product))}>Add To Cart</button>
          </div>
        </div>
      }
    </>
  )
}

export default ProductDetails;