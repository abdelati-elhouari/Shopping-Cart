import React from 'react';
import {useSelector } from 'react-redux';


const Somme = () => {
    const products = useSelector(state => state.Products);
    const subtotal = products.reduce((acc, product) => acc + product.price, 0);
    return (
            <div className="total">
            <div className="grand-total">
              <p><span><strong>Total:</strong></span> <span>{subtotal.toFixed(2)} DH</span></p>
            </div>
          </div>
    );
};

export default Somme;