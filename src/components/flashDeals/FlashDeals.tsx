import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface FlashCardProps {
  productItems: Array<{
    discount: string | number;
    cover: string;
    name: string;
    price: string | number;
  }>;
  addToCart: (product: {
    discount: string | number;
    cover: string;
    name: string;
    price: string | number;
  }) => void;
}

const SampleNextArrow = (props: { onClick: any }) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  );
};

const SamplePrevArrow = (props: { onClick: any }) => {
  const { onClick } = props;
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
    nextArrow: <SampleNextArrow onClick={null} />,
    prevArrow: <SamplePrevArrow onClick={null} />,
  };

  return (
    <>
      <Slider {...settings}>
        {productItems.map(
          (
            { discount, cover, name, price },
            index: React.Key | null | undefined
          ) => {
            return (
              <div className="box" key={index}>
                <div className="product mtop">
                  <div className="img">
                    <span className="discount">{discount}% Off</span>
                    <img src={cover} alt="" />
                    <div className="product-like">
                      <label>{count}</label> <br />
                      <i className="fa-regular fa-heart" onClick={increment}></i>
                    </div>
                  </div>
                  <div className="product-details">
                    <h3>{name}</h3>
                    <div className="rate">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="price">
                      <h4>${price}.00</h4>
                      <button onClick={() => addToCart({ discount, cover, name, price })}>
                        <i className="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </Slider>
    </>
  );
};

export default FlashCard;
