import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../../components/Footer/footer";
import "./cetory.css";
import Acoustic_Bronze from "../../asstes/images/Acoustic_Bronze.png";
import imgbox2 from "../../asstes/images/imgbox2.png";
import Acoustic from "../../asstes/images/Acoustic.png";
import Acoustic2 from "../../asstes/images/Acoustic2.png";
import prodcut1 from "../../asstes/images/prodcut1.png";
import start from "../../asstes/images/start.png";
import sort from "../../asstes/images/sort.png";
import ProductSlider from "../../components/Slider";
import CattagorySort from "../../components/Cetogry/cattagorySort";

const Category_Detail = () => {
  const [active, setActive] = useState(1);
  const [show,setShow]=useState({chnageNavrBar:"true",showMblNav:false})
  const imageBox = [
    {
      img: Acoustic_Bronze,
      title: "Acoustic",
    },
    {
      img: imgbox2,
      title: "Electric",
    },
    {
      img: Acoustic,
      title: "Classic",
    },
    {
      img: imgbox2,
      title: "BASS",
    },
    {
      img: imgbox2,
      title: "Ukulele",
    },
    {
      img: Acoustic2,
      title: "Příslušenství",
    },
  ];
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
  const handleNavBar=()=>{
    if(show.showMblNav==true){
      setShow({chnageNavrBar:"true", showMblNav:false})
    }
    else{
      setShow({chnageNavrBar:"true", showMblNav:true})
    }
  
  }
  return (
    <>
      <Navbar datachange={show} onClick={()=>handleNavBar()} />
      <div className="cat_banner_wrapper"></div>
      <div className="cat_container">
        <div className="cat_top_box">
          <div className="cat_top_heading_box">
            <div className="cat_top_bor"></div>
            <div className="cat_top_heaing">Struny na kytaru</div>
            <div className="top_borer_box">
              <div className="cat_top_bor2"></div>
            </div>
          </div>
          <div className="cat_top_text1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            blandit fames in diam sed nunc mattis. Viverra interdum tincidunt
            amet facilisi pellentesque purus proin tempus. Pharetra ut feugiat
            nunc eu etiam et. Bibendum et enim sodales eros facilisis
            ullamcorper. Accumsan tortor eros, maecenas tincidunt amet odio
            nulla ut. Egestas lectus enim amet interdum cursus.
          </div>
        </div>

        <div className="car_images_box">
          {imageBox.map((data) => {
            return (
              <>
                <div className="img_box">
                  <div>
                    <img src={data.img} className="img-fluid" />
                  </div>
                  <div className="img_box_text">{data.title}</div>
                </div>
              </>
            );
          })}
        </div>

        <div className="cat_box_product">
          <div className="cat_fiilet_menu">
            <div className="cat_sort_wrapper">
              <img src={sort} /> Skrýt filtry
      
            </div>
            <CattagorySort />
          </div>
          <div className="cat_product_menu">
            <div className="cat_product_tabs_wrapper">
              <div
                className={
                  active == 1 ? "Active_cat_tabs_product" : "cat_tabs_product"
                }
                onClick={() => setActive(1)}
              >
                Nejprodávanější
              </div>
              <div
                className={
                  active == 2 ? "Active_cat_tabs_product" : "cat_tabs_product"
                }
                onClick={() => setActive(2)}
              >
                Od nejlevnějšího
              </div>
              <div
                className={
                  active == 3 ? "Active_cat_tabs_product" : "cat_tabs_product"
                }
                onClick={() => setActive(3)}
              >
                Od nejdražšího
              </div>
              <div
                className={
                  active == 4 ? "Active_cat_tabs_product" : "cat_tabs_product"
                }
                onClick={() => setActive(4)}
              >
                Podle hodnocení
              </div>
            </div>
            <div className="cat_all_product_box">
              {ProductCard.map((data) => {
                return (
                  <>
                    <div className="cat_prodcut_card">
                      <div>
                        {" "}
                        <img src={data.img} className="img-fluid" />
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
            </div>
            <div className="paginatio_wrapper">
              <div className="pagi_orev_btn">Předchozí</div>
              <div className="cat_page_no">1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>...</div>
              <div>6</div>
              <div className="pagi_orev_btn2">Další</div>
            </div>
          </div>
        </div>

        <div className="slider_wrapper_box">
          <div className="slider_heading">Další doporučené produkty</div>
          <ProductSlider />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Category_Detail;
