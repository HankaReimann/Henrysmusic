import React from "react";
import "./detail_tabs.css";
import tipycard from "../../asstes/images/tipycard.png";

const TipyComponet = () => {
  return (
    <>
      <div className="tipy_container">
        <div className="tipy_card">
          <img src={tipycard} className="img-fluid" />
          <div className="tipy_card_heading">První kroky s kytarou</div>
          <div className="tipy_card_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            tincidunt vestibulum risus integer. Tristique sit vestibulum in et
            ut. Enim ornare a mi ipsum suscipit eu. Et fusce leo, tincidunt
            mauris a, amet at.
          </div>
          <div className="tipy_card_text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
          <div className="tipy_card_box">
            <div className="tipy_btn">Přečíst</div>
          </div>
        </div>
        <div className="tipy_card">
          <img src={tipycard} className="img-fluid" />
          <div className="tipy_card_heading">První kroky s kytarou</div>
          <div className="tipy_card_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            tincidunt vestibulum risus integer. Tristique sit vestibulum in et
            ut. Enim ornare a mi ipsum suscipit eu. Et fusce leo, tincidunt
            mauris a, amet at.
          </div>
          <div className="tipy_card_text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
          <div className="tipy_card_box">
            <div className="tipy_btn">Přečíst</div>
          </div>
        </div>
        <div className="tipy_card2">
          <img src={tipycard} className="img-fluid" />
          <div className="tipy_card_heading">První kroky s kytarou</div>
          <div className="tipy_card_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            tincidunt vestibulum risus integer. Tristique sit vestibulum in et
            ut. Enim ornare a mi ipsum suscipit eu. Et fusce leo, tincidunt
            mauris a, amet at.
          </div>
          <div className="tipy_card_box">
            <div className="tipy_btn">Přečíst</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TipyComponet;
