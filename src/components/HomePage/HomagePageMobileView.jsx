import React from "react";
import "./home.css";
import card1M from "../../asstes/images/card1M.png";
import card2m from "../../asstes/images/card2m.png";
import mimg3 from "../../asstes/images/mimg3.png";
import mc4 from "../../asstes/images/mc4.png";
import mlc from "../../asstes/images/mlc.png";
import mlc2 from "../../asstes/images/mlc2.png";

const HomagePageMobileView = () => {
  return (
    <>
      <div className="h_home_main_container">
        <div className="hm_card1_sec">
          <div>
            <div className="m_car1_img">
              <img src={card1M} />
            </div>
            <div className="mcard1_heading">Artists</div>
          </div>
          <div>
            <div className="m_car1_img">
              <img src={card2m} />
            </div>
            <div className="mcard1_heading">Poradna</div>
          </div>
        </div>
        <div className="h_card_sec2">
          <div>
            <div className="m_car1_img">
              <img src={mimg3} />
            </div>
            <div className="mcard1_heading">Produkty</div>
          </div>
        </div>
        <div className="m_text_content">
          <div className="m_text_heading">Coated struny</div>
          <div className="m_text_sec">
            Henry´s Strings jsou kvalitní struny, které výborně drží ladění,
            mají skvělou intonaci s jasným čistým tónem a dlouhou životnost.
            Dostupné pro elektrické, akustické i klasické kytary.
          </div>
        </div>
        <div className="m_card_4sec">
          <div>
            <div>
              <img src={mc4} />
            </div>
            <div className="mcard4_btn">Artists</div>
          </div>
          <div>
            <div>
              <img src={mc4} />
            </div>
            <div className="mcard4_btn">Artists</div>
          </div>
        </div>
		<div className="m_text_content">
          <div className="m_text_heading">Normální struny</div>
          <div className="m_text_sec">
		  Henry´s Strings představuje novou řadu Coated strun, které jsou potažené tenkou ochranou vrstvou polymeru, která až 3x prodlužuje jejich životnost. Struny mají jasný čistý tón, skvělou intonaci a perfektně drží ladění.
          </div>
        </div>
		<div className="m_card_4sec">
          <div>
            <div>
              <img src={mc4} />
            </div>
            <div className="mcard4_btn">Artists</div>
          </div>
          <div>
            <div>
              <img src={mc4} />
            </div>
            <div className="mcard4_btn">Artists</div>
          </div>
        </div>
		<div className="m_card_last_sec">
		<div>
            <div>
              <img src={mlc} />
            </div>
			<div className="last_cardsec_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor placerat velit, fames sed tortor purus.</div>
            <div className="mLast_btn">Placeholder</div>
          </div>
		<div>
            <div>
              <img src={mlc2} />
            </div>
			<div className="last_cardsec_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor placerat velit, fames sed tortor purus.</div>
			<div className="mLast_btn">Placeholder</div>
          </div>
		</div>
      </div>
    </>
  );
};

export default HomagePageMobileView;
