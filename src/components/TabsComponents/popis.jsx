import React from "react";
import "./detail_tabs.css";
import popsi_img from "../../asstes/images/popsi_img.png";

const PopisComponent = () => {
  return (
    <>
      <div className="detail_tabs_container">
        <div>
          <div className="popsi_heading">Hlavní headline</div>
          <div className="pppsi_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nam et
            tortor massa consequat facilisis. Orci magna enim, tempor cursus
            sit. Et, quis mauris nisi scelerisque. In etiam nisl massa nec
            ipsum, pellentesque. Vulputate commodo in eget consequat interdum.
          </div>
          <div className="popsi_img">
            <img src={popsi_img} className="img-fluid" />
          </div>
        </div>
        <div className="popsi_right">
          <div className="popsi_heading">Technické specifikace</div>
          <div className="popsi_point_box">
            <div className="pppsi_text"> Tvrdost: 010“/047“</div>
            <div className="pppsi_text"> Vinutí: Válcové</div>
            <div className="pppsi_text"> Materiál: Bronz</div>
            <div className="pppsi_text"> Jádro: Ocelové</div>
            <div className="pppsi_text"> Zakončení: Kulička (ball end)</div>
            <div className="pppsi_text">
              {" "}
              Struny v balení: 010, 014, 023, 030, 039, 047
            </div>
            <div className="pppsi_text"> Kód produktu: HAB12ST10</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopisComponent;
