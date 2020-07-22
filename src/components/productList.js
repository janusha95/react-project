import React from "react"
import Product from './model/products'
import boat from '../img/boat.jpg'
import firestick from '../img/fire-stick.jpg'
import bose from '../img/bose.jpg'
import harddisk from '../img/hard-disk1.jpg'
import alexa from '../img/alexa.jpg'
import watch from '../img/watch.jpg'
import Star_rating_3 from '../img/Star_rating_3.5_of_5.png'
import Star_rating_4 from '../img/Star_rating_4_of_5.png'
import Star_rating_5 from '../img/Star_rating_4.5_of_5.png'

const Products = [
    {
        imgPath : harddisk,
        desc : "Segate hard-disk 2TB - External cable for Windows/MAC",
        ratimg : Star_rating_3,
        price : "CDN$ 80",
        featured : true
    },

    {
    
        imgPath : alexa,
        desc : "All-new Echo (3rd Gen) - Smart speaker with Alexa - Twilight Blue",
        ratimg : Star_rating_4,
        price : "CDN$ 89.99",
        featured : true
    },
    {
        imgPath : firestick,
        desc : "Fire TV Stick with Alexa Voice Remote, streaming media player",
        ratimg : Star_rating_3,
        price : "CDN$ 39.89",
        featured : true
    },
    {
        imgPath : bose,
        desc : "Bose SoundLink Color Bluetooth Speaker II- Limited Edition, Black",
        ratimg : Star_rating_5,
        price : "CDN$ 169",
        featured : true
    },
    {
        imgPath : watch,
        desc : "Fitbit Versa 2 Health & Fitness Smartwatch with Music, Alexa",
        ratimg : Star_rating_4,
        price : "CDN$ 199",
        featured : true
    },
    {
        imgPath : boat,
        desc : "Boat CDRZX110 Over-Ear Headphones with 500Bass(Black)",
        ratimg : Star_rating_5,
        price : "CDN$ 24.98",
        featured : false
    },


]

const ProductList = () => {



    return (
        <section>
            <h2 className= "title">Best Selling</h2>
            <div className="product-card">
                {Products.map((item) => <Product name={item.desc} img={item.imgPath} price={item.price} rating={item.ratimg} />)}


            </div>
        </section>
    )
}


export default ProductList;