import React from "react";
import Catg from "./Catg";
import "./style.css";
import ShopCart from "./ShopCart";


const addToCart = () => {
}

const shopItems = [
    {
      id: 1,
      name: 'Item 1',
      description: 'Description of Item 1',
      price: 10.99,
    },
    {
      id: 2,
      name: 'Item 2',
      description: 'Description of Item 2',
      price: 19.99,
    },
    
  ];
  

const ShopPage = () => {
  return (
    <>
      <section className="shop background">
        <div className="container d_flex">
          <Catg />

          <div className="contentWidth">
            <div className="heading d_flex">
              <div className="heading-left row  f_flex">
                <h2>Mobile Phones</h2>
              </div>
              <div className="heading-right row ">
                <span>View all</span>
                <i className="fa-solid fa-caret-right"></i>
              </div>
            </div>
            <div className="product-content grid1">
              <ShopCart addToCart={addToCart} shopItems={shopItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopPage;

