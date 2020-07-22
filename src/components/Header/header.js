import React from 'react';
import logo from '../../img/Amazon-logo-white.svg.png'

const Header = () => {

	return (

		<header>

		    <div className="navigation-bar">

		        <div className="logo">
		            <a href="/"><img src={logo} alt=""/></a>
		        </div>
				<div className="navigation-box">
					<article className="nav-section">
						<p className= "nav-element"><a href="#">Accounts</a></p>
						<p className= "nav-element"><a href="#">Orders</a></p>
						<p className= "nav-element"><a href="#">Cart</a></p>		
						<button type="button" className="nav-option nav-element"><a href="/login"><strong>Sign In</strong></a></button>
						<button type="button" className="nav-option nav-element"><a href="/registration"><strong>Sign Up</strong></a></button>
					</article>
				</div>

		    </div>

		</header>
	)

}

export default Header; 