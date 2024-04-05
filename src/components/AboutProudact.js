import React, { useState, useEffect } from 'react';
import pic from'../images/product01.png'
import './style/Aboutproudact.css'
import data from '../data/Products.json'
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Function/Actions';


const Proudact = () => {
    const [product, setproduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const selectedProduct = data.find(item => item.id === parseInt(id));
    setproduct(selectedProduct);
  }, [id]);
  
   const dispatch = useDispatch();
    const handleAddToCart = (product) => {
      dispatch(addToCart(product)); 
    };
  if (!product) {
    return (
        <section className="py-5 aboutp">
            <div className="container px-4 px-lg-5 my-5">
                <div>Loading...</div>;
            </div>
        </section>        
    )    
}

    return (
        <div>
            <section className="py-5 aboutp">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={require(`../images/${product.image}`)} alt="..."/></div>
                    <div className="col-md-6">
                  
                        <h1 className="display-5 fw-bolder prodacttitle">{product.name}</h1>
                        <div className="fs-5 mb-5">
                            <span >{product.price} DH</span>
                        </div>
                        <p className="lead">{product.description}</p>
                        <div className="d-flex">
                          <button className="btn btn-outline-dark flex-shrink-0" type="button" onClick={()=>handleAddToCart(product)}>
                            <FontAwesomeIcon icon={faShoppingCart}  className='px-2'/>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default Proudact;