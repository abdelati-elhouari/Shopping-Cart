import React from 'react';
// import shop from '../images/shop.jpg';
import pic from'../images/product01.png'
import "./style/Card.css"

import { useSelector } from 'react-redux';
import Somme from './Somme';
import ListeProduct from './ListeProduct';



const Card = () => {
  const proudacts = useSelector(state => state.Products);

    return (
      <div className='container'>
         <div className='row d-flex justify-center cartp'>
            <div className='col-md-7'>
                <ListeProduct proudacts={proudacts}/>
            </div>
            <div className='col-md-5 totalDiv'>
                  <Somme/>
            </div>
            </div>
        </div>
    );
};

export default Card;