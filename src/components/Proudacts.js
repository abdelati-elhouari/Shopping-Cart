import React from 'react';
import './style/Proudacts.css'
import Product from './Product';

const Proudacts = ({products}) => {

    return (
        <div className='row'>
            {
                products.map(product => 
                                 
                    <Product Product={product} key={product.id} />
                    
                    )
            }
        </div>
       
    );
};

export default Proudacts;