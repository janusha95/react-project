import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import ProductList from "./components/productList";
import Greeting from "./components/Greeting";
import './css/style.css';
import './css/default.css';
import './css/reset.css';


const App = () => {
	return (
    < >
  <Header/>
 
   <ProductList/> 
  
  <Footer/>
  </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

