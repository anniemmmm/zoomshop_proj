import React from "react";
import Sdata from "./Sdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };

  return (
    <Slider {...settings}>
      {Sdata.map((value) => {
        return (
          <div className="box d_flex top" key={value.id}>
            <div className="left">
              <h1>{value.title}</h1>
              <p>{value.desc}</p>
              <button className="btn-primary">Visit Collections</button>
            </div>
            <div className="right">
              <img src={value.cover} alt="" />
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default SlideCard;
