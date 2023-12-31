
import React from "react";
import Catg from "./Catg";
import "./style.css";
import Shop from "./Shop";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  const addToCart = (_product: { id: any }) => {
  };
  

  interface ShopCartProps {
    addToCart: (product: { id: any }) => void;
    shopItems: { id: number; name: string; description: string; price: number }[];
  }
  
 
  
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
              <Shop addToCart={addToCart} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
