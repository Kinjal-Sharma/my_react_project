import React, { useEffect } from 'react';
import './ProductList.css';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { GET_PRODUCT_LIST } from '../Actions';
import { NavLink, useNavigate } from 'react-router-dom';

const ProductList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { list,
    isloading,
    isloaded } = useSelector((state) => state.productListReducer);

  useEffect(() => {
    dispatch({ type: GET_PRODUCT_LIST });
  }, []);

  if (isloading) return(
    <div className='loading-page'>
        <h3 className="spinner"><AiOutlineLoading3Quarters /></h3>
        <h3 style={{ color:"black" }}>Loading products...</h3>
      </div>
      )

      return (
      <div className="product-list">
        <h2>Shop Products</h2>
        <div className="product-grid">
          {list?.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>₹{Math.round(product.price * 80)}</p>
              <p>{product.description}</p>
              <button onClick={() => {
                navigate(`/productdetails/${product.id}`)
              }}>View Product</button>
            </div>
          ))}
        </div>
      </div>
      );
};

      export default ProductList;
