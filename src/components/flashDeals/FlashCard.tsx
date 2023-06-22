import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ProductItem {
  discount: number;
  cover: string;
  name: string;
  price: number;
}

interface FlashCardProps {
  productItems: ProductItem[];
  addToCart: (productItem: ProductItem) => void;
}

const SampleNextArrow: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  );
};

const SamplePrevArrow: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-long-arrow-alt-left"></i>
      </button>
    </div>
  );
};

const FlashCard: React.FC<FlashCardProps> = ({ productItems, addToCart }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow onClick={function (): void {
      throw new Error("Function not implemented.");
    } } />,
    prevArrow: <SamplePrevArrow onClick={function (): void {
      throw new Error("Function not implemented.");
    } } />,
  };

  return (
    <>
      <Slider {...settings}>
        {productItems.map((productItem, index) => {
          return (
            <div className="box" key={index}>
              <div className="product mtop">
                <div className="img">
                  <span className="discount">{productItem.discount}% Off</span>
                  <img src={productItem.cover} alt="" />
                  <div className="product-like">
                    <label>{count}</label> <br />
                    <i className="fa-regular fa-heart" onClick={increment}></i>
                  </div>
                </div>
                <div className="product-details">
                  <h3>{productItem.name}</h3>
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="price">
                    <h4>${productItem.price}.00</h4>
                    <button onClick={() => addToCart(productItem)}>
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default FlashCard;
