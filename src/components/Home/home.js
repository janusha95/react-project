import React from 'react';

import products from '../Model/products';


const Home = () => {

	return (

	<>	
	<section id="body" className="prdt-section">
	<div className="prdt-grid">
					<div className="prdt-tile">
						<a href="/products" target="_blank" >
						<img className="prdt-image" src="/img/{{this.imgPath}}" alt="Hard-disk"/>
						<p className = "prdt-detail">sdgdshd</p>
						<div style="text-align: left"><img className= "star-rating" src= "/img/{{this.ratimg}}" alt="star-rating"/></div>
						<p className = "prdt-subdetail">sgesehywreruret</p></a>
					</div>
				  	<div className="prdt7 prdt-tile">
						<h3 className="filter-title">Electronics</h3>
						<ul className = "list">
							<li><a href ="#">Accessories & Supplies</a></li>
							<li><a href ="#">Camera, Photo & Video</a></li>	
							<li><a href ="#">Car & Vehicle Electronics</a></li>
							<li><a href ="#">Cell Phones & Accessories</a></li>
							<li><a href ="#">eBook Readers & Accessories</a></li>
							<li><a href ="#">GPS & Navigation</a></li>
							<li><a href ="#">Headphones</a></li>
							<li><a href ="#">Home Audio</a></li>
							<li><a href ="#">Office Electronics</a></li>
							<li><a href ="#">Portable Audio & Video</a></li>
							<li><a href ="#">Radio Communication</a></li>
							<li><a href ="#">Security & Surveillance</a></li>
							<li><a href ="#">Telephones & Accessories</a></li>
							<li><a href ="#">Televisions & Video</a></li>
							<li><a href ="#">Wearable Technology</a></li>						
						</ul>
				 	</div>  
		</div>				
	</section>
	</>

	)
}

export default Home;