import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/slices/productSlice";
import "./filter.css";

function Filter() {
  const myAPI = useSelector(state => state.api);
  const state = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const clickHandler = (e) => {dispatch(fetchProducts(`${myAPI}/category/${e.target.name}`))};
  return(
    <div className="filter">
      <button key={0} onClick={() => {dispatch(fetchProducts(myAPI))}} name='all'>all</button>
      {state.map((cat, i) => {
        return <button key={i} onClick={clickHandler} name={cat}>{cat}</button>
      })}
    </div>
  )
}

export default Filter;