import React, { useState } from "react";
import Navbar from "../Navbar";
import "./pdetail.css";
import Footer from "../Footer/footer";
import Union from "../../asstes/images/Union.png";
import arrowe4 from "../../asstes/images/arrowe4.png";
import galler from "../../asstes/images/galler.png";
import gallItems from "../../asstes/images/gallItems.png";
import lastFrame from "../../asstes/images/lastFrame.png";
import rating2 from "../../asstes/images/rating2.png";
import Icon2 from "../../asstes/images/Icon2.png";
import p1 from "../../asstes/images/p1.png";
import p2 from "../../asstes/images/p2.png";
import p3 from "../../asstes/images/p3.png";
import PopisComponent from "../TabsComponents/popis";
import RecenzeComponet from "../TabsComponents/recenze";
import FotoComponent from "../TabsComponents/foto";
import TipyComponet from "../TabsComponents/tipy";
import PrislusComponent from "../TabsComponents/prislus";
import ProductSlider from "../Slider";
import MobileViewTabs from "../mobileViewTabs";

const ProductDetail = () => {
  const [show, setShow] = useState({
    chnageNavrBar: "true",
    showMblNav: false,
  });
  const [activeView, setActiveView] = useState(1);
  const handleNavBar = () => {
    if (show.showMblNav == true) {
      setShow({ chnageNavrBar: "true", showMblNav: false });
    } else {
      setShow({ chnageNavrBar: "true", showMblNav: true });
    }
  };
  return (
    <>
      <Navbar datachange={show} onClick={()=>handleNavBar()} />
      <div className="detail_container">
        <div className="detail_hero_sec">
          <div className="d_her_left">
            <div className="detail_indicator_box">
              <div>
                <img src={Union} />
              </div>
              <div>
                <img src={arrowe4} />
              </div>
              <div className="detail_indictor_items2">Název kategorie</div>
              <div className="detail_indictor_dots">...</div>
              <div>
                <img src={arrowe4} />
              </div>
              <div className="detail_indictor_items">Název podkategorie</div>
              <div>
                <img src={arrowe4} />
              </div>
              <div className="detail_indictor_items">Název produktu</div>
            </div>
            <div className="top_slider_box">
              <div>
                <img src={galler} className="img-fluid" />
              </div>
              <div className="galery_items_box">
                <div className="gal_items">
                  <img src={gallItems} className="img-fluid" />
                </div>
                <div className="gal_items">
                  <img src={gallItems} className="img-fluid" />
                </div>
                <div className="gal_items">
                  <img src={gallItems} className="img-fluid" />
                </div>

                <div className="gal_items">
                  <img src={lastFrame} className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          <div className="detail_her_right">
            <div className="d_right_heading">
              ACOUSTIC 12ST Bronze LIGHT 10-47
            </div>
            <div className="d_right_rating_box">
              <img src={rating2} />
              <div className="rating_total">16 hodnocení</div>
            </div>
            <div className="d_right_text">
              Sada Henry´s 010“ / 047“ je určena pro 12-ti strunnou akustickou
              kytaru. Tato tenze je ideální variantou, která nabízí jak silný
              zvuk i pohodlnou hru akordů či barré hmatů.
            </div>
            <div className="d_right_text2">Zobrazit celý popis</div>
            <div className="d_toogle_heading">Vyberte variantu:</div>
            <div className="d_right_accordion">
              <div className="d_right_accordion_header">
                <div></div>
                <div>Phospor Bronze 10-47 – Měkké</div>
                <img src={Icon2} />
              </div>
              <div className="accordion_body">
                <div className="ac_body_text">Skladem</div>
                <div className="ac_body_text2">249 Kč</div>
                <div className="acc_body_text3">Cena vč. DPH</div>
                <div className="acc_seprator"></div>
                <div className="d_right_pointer_wrapper">
                  <div className="d_pointer_box">
                    <img src={p1} />
                    <div className="point_text">Záruka 3 roky</div>
                  </div>
                  <div className="d_pointer_box">
                    <img src={p1} />
                    <div className="point_text">Záruka 3 roky</div>
                  </div>
                  <div className="d_pointer_box">
                    <img src={p1} />
                    <div className="point_text">Záruka 3 roky</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d_tabs_wrapper">
        <div className="d_tabs_box">
          <div
            className={
              activeView === 1 ? "active_d_tabs_items" : "d_tabs_items"
            }
            onClick={() => setActiveView(1)}
          >
            Popis produktu
          </div>
          <div
            className={
              activeView === 2 ? "active_d_tabs_items" : "d_tabs_items"
            }
            onClick={() => setActiveView(2)}
          >
            Recenze
          </div>
          <div
            className={
              activeView === 3 ? "active_d_tabs_items" : "d_tabs_items"
            }
            onClick={() => setActiveView(3)}
          >
            Foto & video
          </div>
          <div
            className={
              activeView === 4 ? "active_d_tabs_items" : "d_tabs_items"
            }
            onClick={() => setActiveView(4)}
          >
            Tipy & triky
          </div>
          <div
            className={
              activeView === 5 ? "active_d_tabs_items" : "d_tabs_items"
            }
            onClick={() => setActiveView(5)}
          >
            Příslušenství
          </div>
        </div>
      </div>
      <div className="tabs_content_container shadow">
        <div className="tabs_content_inner">
          {activeView == 1 ? (
            <PopisComponent />
          ) : activeView === 2 ? (
            <RecenzeComponet />
          ) : activeView == 3 ? (
            <FotoComponent />
          ) : activeView == 4 ? (
            <TipyComponet />
          ) : activeView == 5 ? (
            <PrislusComponent />
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="mobile_tabs_box shadow">
        <MobileViewTabs />
      </div>
      <div className="detail_slider_box">
        <div className="de_slider_heading">Další doporučené produkty</div>
        <ProductSlider />
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
