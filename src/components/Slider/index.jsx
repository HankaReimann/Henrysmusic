import React, { Component } from "react";
import Slider from "react-slick";
import prodcut1 from "../../asstes/images/prodcut1.png";
import start from "../../asstes/images/start.png";
import next from "../../asstes/images/next.png";
import back from "../../asstes/images/back.png";

const ProductSlider = () => {
	const ProductCard = [
		{
		  img: prodcut1,
		  text: "ACOUSTIC 12ST Bronze 10-47",
		  price: "249 Kč",
		},
		{
		  img: prodcut1,
		  text: "ACOUSTIC 12ST Bronze 10-47",
		  price: "249 Kč",
		},
		{
		  img: prodcut1,
		  text: "ACOUSTIC 12ST Bronze 10-47",
		  price: "249 Kč",
		},
		{
		  img: prodcut1,
		  text: "ACOUSTIC 12ST Bronze 10-47",
		  price: "249 Kč",
		},
		{
		  img: prodcut1,
		  text: "ACOUSTIC 12ST Bronze 10-47",
		  price: "249 Kč",
		},
		{
		  img: prodcut1,
		  text: "ACOUSTIC 12ST Bronze 10-47",
		  price: "249 Kč",
		},
		{
		  img: prodcut1,
		  text: "ACOUSTIC 12ST Bronze 10-47",
		  price: "249 Kč",
		},
		{
		  img: prodcut1,
		  text: "ACOUSTIC 12ST Bronze 10-47",
		  price: "249 Kč",
		},
		{
		  img: prodcut1,
		  text: "ACOUSTIC 12ST Bronze 10-47",
		  price: "249 Kč",
		},
		{
		  img: prodcut1,
		  text: "ACOUSTIC 12ST Bronze 10-47",
		  price: "249 Kč",
		},
		{
		  img: prodcut1,
		  text: "ACOUSTIC 12ST Bronze 10-47",
		  price: "249 Kč",
		},
		{
		  img: prodcut1,
		  text: "ACOUSTIC 12ST Bronze 10-47",
		  price: "249 Kč",
		},
	  ];
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <div className="slider_next_arrow" onClick={onClick} >
      <img src={next} className="img-fluid" />
    </div>
    ;
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className="slider_prev_arrow" onClick={onClick} >
            <img src={back} className="img-fluid" />
      </div>
      ;
  }
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1135,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          prevArrow:false,
        centerMode:true
        },
      },
    ],
  };
  return (
    <>
      <div>
        <Slider {...settings}>
      

	{ProductCard.map((data) => {
                return (
                  <>
                    <div className="cat_prodcut_card">
                      <div>
                        {" "}
                        <img src={data.img} className="slider_img" />
                      </div>
                      <div className="card_rating_box">
                        <img src={start} />
                        <div className="card_star_text">16 hodnocení</div>
                      </div>
                      <div className="card_text">{data.text}</div>
                      <div className="cat_card_price">{data.price}</div>
                    </div>
                  </>
                );
              })}

    
          
        </Slider>
      </div>
    </>
  );
};

export default ProductSlider;
