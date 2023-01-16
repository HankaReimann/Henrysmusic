import React from "react";
import "./detail_tabs.css";
import priscard from "../../asstes/images/priscard.png";
import pris_rating from "../../asstes/images/pris_rating.png";
import priscard2 from "../../asstes/images/priscard2.png";
import prscard4 from "../../asstes/images/prscard4.png";
import p11 from "../../asstes/images/p11.png";
import p22 from "../../asstes/images/p22.png";
import p33 from "../../asstes/images/p33.png";

const PrislusComponent = () => {
  return (
    <>
      <div className="pris_container">
        <div className="pris_items">
          <div className="p_con_box">
          <img src={p11} className="img-fluid" />
          </div>
        
          <div className="pris_heading">
            <img src={pris_rating} />
            <div className="pris_card_rating">16 hodnocení</div>
          </div>
          <div className="pris_heading_2">Kapodastr dřevo</div>
          <div className="pris_card_price">249 Kč</div>
        </div>
        <div className="pris_items">
        <div className="p_con_box">
          <img src={p22} className="img-fluid" />
          </div>
          <div className="pris_heading">
            <img src={pris_rating} />
            <div className="pris_card_rating">16 hodnocení</div>
          </div>
          <div className="pris_heading_2">Kapodastr dřevo</div>
          <div className="pris_card_price">249 Kč</div>
        </div>
        <div className="pris_items">
        <div className="p_con_box">
          <img src={p33} className="img-fluid" />
          </div>
          <div className="pris_heading">
            <img src={pris_rating} />
            <div className="pris_card_rating">16 hodnocení</div>
          </div>
          <div className="pris_heading_2">Kapodastr dřevo</div>
          <div className="pris_card_price">249 Kč</div>
        </div>
      </div>
    </>
  );
};

export default PrislusComponent;
