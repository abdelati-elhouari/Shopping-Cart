import React from 'react';
import './style/Header.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';



const Header = () => {
    const Proudacts=useSelector(data=>data.Products)

    return (
    <header className="header trans_300" >
		<div className="main_nav_container">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 text-right">
						<div className="logo_container">
                        <Link to="/">Shopping<span>Shop</span></Link>
						</div>
						<nav className="navbar">
							<ul className="navbar_user">
								<li className="checkout">
                                <Link to="/card">
                                    <FontAwesomeIcon icon={faShoppingCart} />
										<span id="checkout_items" className="checkout_items">{Proudacts.length }</span>
                                        </Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>
	</header>
    );
};

export default Header;