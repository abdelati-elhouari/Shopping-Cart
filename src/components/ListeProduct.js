import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../Function/Actions';

const ListeProduct = ({proudacts}) => {
    const dispatch = useDispatch();

    const handleRemove = (id) => {
      dispatch(removeFromCart(id));
    };
    if(proudacts.length==0){

        return(
        <div className="site-blocks-table h4">
         No products in your card
         </div>

        )

    }
    return (
        <div>
            <div className="site-blocks-table">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="product-thumbnail">Image</th>
                          <th className="product-name">Product</th>
                          <th className="product-price">Price</th>
                          <th className="product-remove">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                      {proudacts.map(product => (
                  <tr key={product.id}>
                    <td className="product-thumbnail">
                      <img src={require(`../images/${product.image}`)} alt="Product" className="img-fluid" />
                    </td>
                    <td className="product-name">
                      <h2 className="h5 text-black ">{product.name}</h2>
                    </td>
                    <td>{product.price}</td>
                    <td>
                      <button className="btn btn-black btn-sm" onClick={() => handleRemove(product.id)}>X</button>
                    </td>
                  </tr>
                ))}
                     
                      </tbody>
                    </table>
             </div>
        </div>
    );
};

export default ListeProduct;