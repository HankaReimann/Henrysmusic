import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import logo from "../../asstes/images/logo.png";
import Frame from "../../asstes/images/Frame.png";
import basket from "../../asstes/images/basket.png";
import arrow from "../../asstes/images/arrow.png";
import mbllogo from "../../asstes/images/mbllogo.png";
import msearch from "../../asstes/images/msearch.png";
import GroupnAv from "../../asstes/images/GroupnAv.png";
import itemsIcon from "../../asstes/images/itemsIcon.png";
import menuicon from "../../asstes/images/menu_icon.png";
import Electric from "../../asstes/images/Electric.png";
import lastTriangle from "../../asstes/images/lastTriangle.png";
import lastbasket3 from "../../asstes/images/basket3.png";
import akariconscross from "../../asstes/images/akar-icons_cross.png";
import Struny_bakground from "../../asstes/images/Struny_bakground.png";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = (props) => {
  const [show, setShow] = useState(false);
  console.log("data=======>", props.datachange);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const pathname = window.location.pathname;
  return (
    <>
      {props.datachange.chnageNavrBar === "true" ? (
        <div className="nav_bar_wrtapper">
          <div className="nav_bar_inner_box">
            <div className="nav_left_sec">
              <Link to="/" style={{ textDecoration: "none" }}>
                {" "}
                <div className="header_logo4">
                  <img src={logo} />
                </div>
              </Link>
              <div className="nav_left_items">
                <div className="nav_items">Produkty</div>
                <Link to="/article" style={{ textDecoration: "none" }}>
                  {" "}
                  <div className="nav_items">Artists</div>
                </Link>
                <Link to="/blog" style={{ textDecoration: "none" }}>
                  <div className="nav_items">Blog</div>
                </Link>
                <Link to="/category" style={{ textDecoration: "none" }}>
                  <div className="nav_items">Pro členy</div>
                </Link>

                <Link to="/product-detail" style={{ textDecoration: "none" }}>
                  <div className="nav_items">Kontakt</div>
                </Link>
              </div>
            </div>
            <div
              className={
                pathname === "/product-detail"
                  ? "nav_right_sec2"
                  : "nav_right_sec"
              }
            >
              <div
                className={
                  pathname === "/product-detail"
                    ? "nav_serach_wraper2"
                    : pathname === "/category"
                    ? "nav_serach_wraper2"
                    : "nav_serach_wraper"
                }
              >
                <img src={Frame} />
                Vyhledávaný výraz
              </div>
              <div className="nav_right_inner">
                {pathname === "/product-detail" ? (
                  ""
                ) : (
                  <div
                    className={
                      pathname === "/category" ? "nav_basket2" : "nav_basket"
                    }
                  >
                    {pathname === "/category" ? (
                      <img src={lastbasket3} />
                    ) : (
                      <img src={basket} />
                    )}
                    {pathname === "/category" ? "Košík" : "  1283 Kč"}
          {pathname === "/category" &&  <div className="basket_counter">23</div>}         
                  </div>
                )}
                <div
                  className={
                    pathname === "/product-detail"
                      ? "nav_lang_btn2"
                      : pathname === "/category"
                      ? "nav_lang_btn2"
                      : "nav_lang_btn"
                  }
                >
                  CZ
                  <img src={arrow} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="article_nav_wrapper">
          <div>
            <img src={logo} />
          </div>
          <div className="article_nav_right">
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              className="article_items"
            >
              Produkt
            </Link>
            <Link
              to="/article"
              style={{ textDecoration: "none" }}
              className="article_items"
            >
              Artists{" "}
            </Link>
            <Link
              to="/blog"
              style={{ textDecoration: "none" }}
              className="article_items"
            >
              Blog
            </Link>
            <Link
              to="/category"
              style={{ textDecoration: "none" }}
              className="article_items"
            >
              Pro členy
            </Link>
            <Link
              to="/product-detail"
              style={{ textDecoration: "none" }}
              className="article_items"
            >
              {" "}
              Kontakt
            </Link>
          </div>
        </div>
      )}
      <div className="nav_bar_MBLwrtapper">
        <div className="mobile_nav_inner">
          <div>
            <img src={mbllogo} />
          </div>
          <div className="mbl_nav_right">
            <div>
              <img src={msearch} />
            </div>
            <div className="mbv_nav_icon" onClick={props.onClick}>
              <img src={GroupnAv} />
            </div>
          </div>
        </div>
      </div>
      <Offcanvas
        style={{ background: "black" }}
        show={props.datachange.showMblNav}
        onHide={props.onClick}
        placement="end"
      >
        <div className="mbl_menu_wrapper">
          <div className="nav_menu_btn_box"    onClick={props.onClick}>
            <img
              src={akariconscross}
           
              className="menu_btn"
            />
          </div>

          <div className="menu_content_wrapper">
            <div className="menu_left_items">
              <Link
                to="/"
                style={{ textDecoration: "none" }}
                className="article_items"
              >
                <div className="menu_items">
                  <img src={itemsIcon} />
                  Produkty
                </div>
              </Link>
              <Link
                to="/article"
                style={{ textDecoration: "none" }}
                className="article_items"
              >
                <div className="menu_items">
                  <img src={itemsIcon} />
                  Artists
                </div>
              </Link>
              <Link
                to="/blog"
                style={{ textDecoration: "none" }}
                className="article_items"
              >
                <div className="menu_items">
                  <img src={itemsIcon} />
                  Blog
                </div>
              </Link>
              <Link
                to="/category"
                style={{ textDecoration: "none" }}
                className="article_items"
              >
                <div className="menu_items">
                  <img src={itemsIcon} />
                  Pro členy
                </div>
              </Link>
              <Link
                to="/product-detail"
                style={{ textDecoration: "none" }}
                className="article_items"
              >
                <div className="menu_items">
                  <img src={itemsIcon} />
                  Kontakt
                </div>
              </Link>
            </div>

            <div className="menu_right">
              <div className="menu_right_bg">
                <div className="menu_inner_right">
                  <div className="menu_right_inner_items">
                    <div>
                      <img src={menuicon} />
                    </div>
                    <div className="mneu_broder1"></div>
                    <div className="mneu_broder2"></div>
                    <div className="menu_right_content_box">
                      <div className="mrsub_itmes">Od kytaristů</div>
                      <div className="mrsub_itmes">PRO</div>
                      <div className="mrsub_itmes">KYTARISTY</div>
                    </div>
                  </div>
                  <div className="menu_right_img">
                    <img src={Electric} className="img-fluid menu_right_img4" />
                  </div>
                  <div className="menu_right_img_heading">Produkty</div>
                  <div className="last_traingle">
                    <img src={lastTriangle} className="img-fluid last_try" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Offcanvas>
    </>
  );
};

export default Navbar;
