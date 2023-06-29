import React, { useEffect } from "react";
import Filter from "./filter";
import Products from "./products";
import { fetchFilter } from "../store/slices/filterSlice";
import "./productsList.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/slices/productSlice";

function ProductsList() {
  const myAPI = useSelector(state => state.api);
  const state = useSelector(state => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts(myAPI));
  }, []);
  useEffect(() => {
    dispatch(fetchFilter(`${myAPI}/categories`));
  }, []);
  return (
    <>
        <Filter />
        <div className="products">
          {state.map((productData) => {
            return (<Products props={productData} key={productData.id} />)
          })}
        </div>
    </>
  )
}

export default ProductsList;