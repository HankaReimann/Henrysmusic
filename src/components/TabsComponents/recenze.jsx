import React from "react";
import "./detail_tabs.css";
import Slider from "react-slick";
import popsi from "../../asstes/images/popsi.png";
import Starb from "../../asstes/images/Starb.png";
import Stary from "../../asstes/images/Stary.png";
import next from "../../asstes/images/next.png";
import start from "../../asstes/images/start.png";
import back from "../../asstes/images/back.png";
import prodcut1 from "../../asstes/images/prodcut1.png";
import Ellip from "../../asstes/images/Ellip.png";
const RecenzeComponet = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <div className="slider_next_arrow2" onClick={onClick} >
      <img src={next} className="img-fluid" />
    </div>
    ;
  }

  const ProductCard = [
		{
		  img: Ellip,
		  text: "ACOUSTIC 12ST Bronze 10-47",
		  price: "249 Kč",
		},
		{
      img: Ellip,
		  text: "ACOUSTIC 12ST Bronze 10-47",
		  price: "249 Kč",
		},
		{
      img: Ellip,
		  text: "ACOUSTIC 12ST Bronze 10-47",
		  price: "249 Kč",
		},
		{
      img: Ellip,
		  text: "ACOUSTIC 12ST Bronze 10-47",
		  price: "249 Kč",
		},
		{
		  img: Ellip,
		  text: "ACOUSTIC 12ST Bronze 10-47",
		  price: "249 Kč",
		},
		{
      img: Ellip,
		  text: "ACOUSTIC 12ST Bronze 10-47",
		  price: "249 Kč",
		},
	
	  ];
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,

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
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <>
      <div className="rece_container">
        <div className="rece_itmes">
          <img src={popsi} />
          <div className="popsi_ratiog">
            <img src={Stary} />
            <img src={Stary} />
            <img src={Stary} />
            <img src={Starb} />
            <img src={Starb} />
          </div>
          <div className="pospsi_card_heading">
            ACOUSTIC 12ST BRONZELIGHT 10-47
          </div>
          <div className="popsi_card_text">
            Struny Henry’s bronze light jsou super, dobře se mi na ně hraje.{" "}
          </div>
        </div>
        <div className="rece_itmes">
          <img src={popsi} />
          <div className="popsi_ratiog">
            <img src={Stary} />
            <img src={Stary} />
            <img src={Stary} />
            <img src={Starb} />
            <img src={Starb} />
          </div>
          <div className="pospsi_card_heading">
            ACOUSTIC 12ST BRONZELIGHT 10-47
          </div>
          <div className="popsi_card_text">
            Struny Henry’s bronze light jsou super, dobře se mi na ně hraje.{" "}
          </div>
        </div>
        <div className="rece_itmes">
          <img src={popsi} />
          <div className="popsi_ratiog">
            <img src={Stary} />
            <img src={Stary} />
            <img src={Stary} />
            <img src={Starb} />
            <img src={Starb} />
          </div>
          <div className="pospsi_card_heading">
            ACOUSTIC 12ST BRONZELIGHT 10-47
          </div>
          <div className="popsi_card_text">
            Struny Henry’s bronze light jsou super, dobře se mi na ně hraje.{" "}
          </div>
        </div>
        <div className="rece_itmes">
          <img src={popsi} />
          <div className="popsi_ratiog">
            <img src={Stary} />
            <img src={Stary} />
            <img src={Stary} />
            <img src={Starb} />
            <img src={Starb} />
          </div>
          <div className="pospsi_card_heading">
            ACOUSTIC 12ST BRONZELIGHT 10-47
          </div>
          <div className="popsi_card_text">
            Struny Henry’s bronze light jsou super, dobře se mi na ně hraje.{" "}
          </div>
        </div>
      </div>
      <div className="rece_mbl_container">
        <Slider {...settings}>
      

	{ProductCard.map((data) => {
                return (
                  <>
                   <div className="rece_itmes">
          <img src={data.img} />
          <div className="rece_card_name">Karel Novák</div>
          <div className="popsi_ratiog">
            <img src={Stary} className="rading_start" />
            <img src={Stary} className="rading_start" />
            <img src={Stary} className="rading_start" />
            <img src={Starb} className="rading_start" />
            <img src={Starb}  className="rading_start"/>
          </div>
  
          <div className="popsi_card_text">
            Struny Henry’s bronze light jsou super, dobře se mi na ně hraje.{" "}
          </div>
        </div>
                  </>
                );
              })}

    
          
        </Slider>
      </div>
    </>
  );
};

export default RecenzeComponet;
