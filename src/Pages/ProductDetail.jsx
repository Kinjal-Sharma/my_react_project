import React, { useEffect, useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import './ProductDetail.css';
import { useParams } from 'react-router-dom';
import apiClient from '../httpservices'; // your axios instance
import { ADD_TO_CART, GET_SINGLE_PRODUCT } from "../Actions";
import { useDispatch, useSelector } from 'react-redux';

function ProductDetail() {
  const { id } = useParams(); // Get the product ID from the URL

  const dispatch = useDispatch();


  const { productDetail,
    isloading,
    isloaded } = useSelector((state) => state.productdetailReducer);


  useEffect(() => {
    dispatch({ type: GET_SINGLE_PRODUCT, payload: { id } });
  }, [id]);
  console.log("product detail saga is running =====>", id);

  if (isloading) return (
    <div className='loading-page'>
      <h3 className="spinner"><AiOutlineLoading3Quarters /></h3>
      <h3 style={{ color: "black" }}>Loading...</h3>
    </div>
  )



  return (
    <div className="product-card2">
      <div className="product-container">
        <div className='product-view'>
          <h2 className="product-title">{productDetail.title}</h2>
          <img
            className="product-image"
            src={productDetail.image}
            alt={productDetail.title}
          />
        </div>
        <div className='product-details'>
          <h1 style={{ color: "black" }}>About the Product</h1>
          <h3 className="product-title">Category:<br />{productDetail.title}</h3>
          <p className="product-price">
            Price: ₹{Math.round(productDetail.price * 80)}
          </p>
          <p className="product-description">
            <b style={{ fontSize: "24px" }}>Product Description: </b><br />
            {productDetail.description}
          </p><br />
          <button
            onClick={() => {
              dispatch({ type: ADD_TO_CART, payload: productDetail });
            }}
          >
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
