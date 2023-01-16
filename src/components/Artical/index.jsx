import React,{useState} from "react";
import Navbar from "../Navbar";
import Footer from "../Footer/footer";
import "./article.css";
import vector from "../../asstes/images/vector.png";
import arrowRight from "../../asstes/images/arrowRight.png";
import clanek_img from "../../asstes/images/clanek_img.png";
import clanek_im from "../../asstes/images/clanek_im.png";
import phospoho from "../../asstes/images/phospohor_bronze.png";
import basket3 from "../../asstes/images/basket3.png";
import bc from "../../asstes/images/bc.png";
import gc from "../../asstes/images/gc.png";

const Article = () => {
  const [show,setShow]=useState({chnageNavrBar:"false",showMblNav:false})
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
      <Navbar datachange={show} onClick={()=>handleNavBar()}  />
      <div className="artilce_banner_wrapper"></div>
      <div className="article_body_wrapper">
        <div className="artile_inner_container">
          <div className="artile_left_side">
            <div className="article_routes_indi">
              <div className="artilce_indicator">
                <div className="indicator">
                  <img src={vector} className="img-fluid" />
                  <img src={arrowRight} className="img-fluid" />
                </div>
                poradna
                <img src={arrowRight} className="img-fluid" />
                <div className="indicator_text">Henry’s coated</div>
                <img src={arrowRight} className="img-fluid" />
                <div className="indicator_text">Struny s ochranným potahem</div>
              </div>
            </div>
            <div className="artilde_heading"> Struny s ochranným potahem</div>
            <div className="artile_text_container">
              <div className="artilce_text1">
                Znáte Henry's Strings? Oblíbené struny pro elektrickou kytaru
                nyní přichází i ve variantě Coated s ochranným potahem a v
                nových sériích jsou také dostupné i pro baskytaru a ukulele.
                <br />
                <br />
                Novou vlajkovou lodí strun Henry's je série COATED. Jak už název
                napovídá, jde o struny s ochranným potahem, díky kterému vydrží
                až třikrát déle. A ochranná vrstva z polymeru je navíc tak
                tenká, že jí při hraní ani neucítíte.
              </div>
              <div className="artile_img">
                <img src={clanek_img} className="img-fluid" />
              </div>
              <div className="artilcle_heading2">Henry's Strings Coated</div>
              <div className="artile_text2">
                V sérii coated najdeme struny pro akustickou kytaru v provedení
                Bronze i Phospor Bronze, elektrické struny i struny pro
                baskytaru. A i v případě této série se můžete – u kytarových
                strun – těšit na extra tenké
                <br />
                éčko v balení zdarma.
              </div>
              <div className="artile_text3">
                Bronze Coated
                <br />
                Bronzové struny pro akustickou kytaru jsou vyrobeny z kvalitní
                oceli obohacené uhlíkem a bronzové vinutí je následně opatřeno
                mikropotahem z polymeru, který skvěle odolává potu i korozi.
                Struny mají typicky jasný a průrazný zvuk a ochrannou vrstvu při
                hraní ani neucítíte.
                <br />
                <br />
                Phospor Bronze Coated
                <br />
                Fosforbronzové struny pro akustickou kytaru nabízí osvědčený mix
                uhlíkové oceli a fosforbronzového vinutí s ochrannou vrstvou.
                Díky tomu si jejich vřelý a příjemně kulatý zvuk užijete až
                třikrát déle.
                <br />
                <br />
                Elektrické struny Coated
                <br />
                Struny pro elektrickou kytaru s ochrannou vrstvou jsou vyrobeny
                z ušlechtilé oceli s obsahem uhlíku a opatřeny niklovým vinutím.
                Skvělý zvuk Henry's Strings zůstává, jen si ho s Coated strunami
                užijete až třikrát déle.
              </div>
              <div className="artile_img">s
                <img src={clanek_im} className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="article_right_box">
            <div className="arcle_card">
              <img src={phospoho} />
              <div className="arcle_card_text">Henry’s acoustic phosphor</div>
              <div className="arcle_card_price">219 Kč</div>
              <div className="arcle_btn">
                <img src={basket3} />
                Přidat do košíku</div>

            </div>
            <div className="arcle_card">
              <img src={phospoho} />
              <div className="arcle_card_text">Henry’s acoustic phosphor</div>
              <div className="arcle_card_price">219 Kč</div>
              <div className="arcle_btn">
                <img src={basket3} />
                Přidat do košíku</div>

            </div>
            <div className="arcle_card">
              <img src={bc} />
              <div className="arcle_card_text">Henry’s acoustic phosphor</div>
              <div className="arcle_card_price">219 Kč</div>
              <div className="arcle_btn">
                <img src={basket3} />
                Přidat do košíku</div>

            </div>
            <div className="arcle_card">
              <img src={bc} />
              <div className="arcle_card_text">Henry’s acoustic phosphor</div>
              <div className="arcle_card_price">219 Kč</div>
              <div className="arcle_btn">
                <img src={basket3} />
                Přidat do košíku</div>

            </div>
            <div className="arcle_card">
              <img src={gc} />
              <div className="arcle_card_text">Henry’s acoustic phosphor</div>
              <div className="arcle_card_price">219 Kč</div>
              <div className="arcle_btn">
                <img src={basket3} />
                Přidat do košíku</div>

            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Article;
