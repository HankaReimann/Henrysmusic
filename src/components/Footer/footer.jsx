import React from "react";
import "./footer.css";
import footerLogo from "../../asstes/images/footerLogo.png";
import fb from "../../asstes/images/fb.png";
import insta from "../../asstes/images/insta.png";
import you from "../../asstes/images/you.png";

const Footer = () => {
  return (
    <>
      <div className="footer_container">
        <div className="footer_inner_box">
          <div className="footer_content_wraper">
            <div>
              <img src={footerLogo} />
            </div>
            <div className="footer_items_box">
              <div className="footer_main_text">Rychlé odkazy</div>
              <div className="footer_sub_items">Poradna</div>
              <div className="footer_sub_items">Pro začátečníky</div>
              <div className="footer_sub_items">Pro profesionály</div>
              <div className="footer_sub_items">Od vás</div>
            </div>
            <div className="footer_items_box">
              <div className="footer_main_text">Rychlé odkazy</div>
              <div className="footer_sub_items">Poradna</div>
              <div className="footer_sub_items">Pro začátečníky</div>
              <div className="footer_sub_items">Pro profesionály</div>
              <div className="footer_sub_items">Od vás</div>
            </div>

            <div>
              <div className="footer_social_icon">
                <div>
                  <img src={fb} />
                </div>
                <div>
                  <img src={insta} />
                </div>
                <div>
                  <img src={you} />
                </div>
              </div>
              <div className="footer_addres">
                Startcorp s.r.o.Ocelářská 937/39190 00 Praha 9 - VysočanyCzech
                Republic
              </div>
            </div>
          </div>

          <div className="footer_sep"></div>
          <div className="footer_bootom_box">
            <div className="f_left_text">Henry’s Strings 2022 ©</div>
            <div className="footer_b_right">
              <div className="footer_b_items">Smluvní podmínky</div>
              <div className="footer_b_items">Zpracování osobních údajů</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile_footer_coontainer">
        <div className="mbl_footer_inner">
          <div className="mbl_foter_content">
            <div>
              <div className="mbl_items_heading">Rychlé odkazy</div>
              <div className="mbl_foter_items">Poradna</div>
              <div className="mbl_foter_items">Pro začátečníky</div>
              <div className="mbl_foter_items">Pro profesionály</div>
              <div className="mbl_foter_items">Od vás</div>
            </div>
            <div>
              <div className="mbl_items_heading">Naše produkty</div>
              <div className="mbl_foter_items">Struny</div>
              <div className="mbl_foter_items">Lifestyle</div>
              <div className="mbl_foter_items">Gear</div>
              <div className="mbl_foter_items">Naše produkty</div>
            </div>
          </div>
          <div className="mbl_footer_social">
            <div className="mnl_f_social">
              <img src={fb} />
            </div>
            <div className="mnl_f_social">
              <img src={insta} />
            </div>
            <div className="mnl_f_social">
              <img src={you} />
            </div>
          </div>
          <div className="mbl_footer_links">
            <div className="f_links">Smluvní podmínky</div>
            <div className="f_links">Zpracování osobních údajů</div>
          </div>
          <div className="mbl_footer_sep"></div>
          <div className="mbl_f_last">
            <div className="mbl_f_addres">Startcorp s.r.o. Ocelářská, 937/39, 190 00 Praha 9 - Vysočany, Czech Republic</div>
            <div className="mbl_f_addres2">Henry’s Strings 2022 ©</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
