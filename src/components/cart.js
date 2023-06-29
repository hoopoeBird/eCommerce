import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearProducts,
  decrement,
  deleteProduct,
  increment,
} from "../store/slices/cartSlice";
import "./cart.css";

function Cart() {
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = () => {
    return state.reduce((accum, product) => {
      accum += +product.price * product.quantity; // * product.quantity
      return accum;
    }, 0);
  };
  return (
    <div className="cart">
      <div className="info">
        <h1>Your Cart</h1>
        <div className="tnav">
          <button onClick={() => dispatch(clearProducts())}>Clear All</button>
          <h3>Total Price: {totalPrice().toFixed(2)}$</h3>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <td>image</td>
            <td>title</td>
            <td>price</td>
            <td>quantity</td>
            <td>buttons</td>
          </tr>
        </thead>
        <tbody>
          {state.map((product, i) => {
            return (
              <tr
                key={product.id}
                style={{ backgroundColor: i % 2 ? "grey" : "white" }}
              >
                <td>
                  <img src={product.image} />
                </td>
                <td>{product.title}</td>
                <td>{product.price}$</td>
                <td className="din">
                  <span onClick={() => dispatch(increment(product))}>
                    {"<"}
                  </span>{" "}
                  {product.quantity}{" "}
                  <span onClick={() => dispatch(decrement(product))}>
                    {">"}
                  </span>
                </td>
                <td>
                  <button onClick={() => dispatch(deleteProduct(product.id))}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
