import React, { useState,useEffect } from 'react';
import './style/Home.css'
import Proudacts from './Proudacts';
import data from '../data/Products.json'



const Home = () => {
    return (
        <div className='container'>
        <Proudacts products={data}/>
        </div>
    );
};

export default Home;
