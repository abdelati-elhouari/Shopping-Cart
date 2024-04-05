import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEye } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Function/Actions';

const Product = ({Product}) => {
    
    const dispatch = useDispatch();
    const handleAddToCart = (product) => {
      dispatch(addToCart(product)); 
    };
    return (
            <div className="col-12 col-sm-6 col-md-4 wrapper" >
                <div className="card text-center">
                <div className="image">
                    <img src={require(`../images/${Product.image}`)} width="300"/>  
                </div>
                <div className="row about-product text-center">
                    <h3 className='col-12'>{Product.name}</h3>
                    <h4 className='col-12'>{Product.price} DH</h4>
                  
                    <div className='buton col-12'>

                    <button className="btn btn-success view"><Link to={ `/Proudact/${Product.id}`} className='link'> view  <FontAwesomeIcon icon={faEye}  /> </Link> </button>              
                    <button className="btn btn-success buy-now" onClick={()=>handleAddToCart(Product)}>Add to  <FontAwesomeIcon icon={faShoppingCart}  /></button>                   
                    </div>
                </div>               
            </div>
            </div>
        
    );
};

export default Product;