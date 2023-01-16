import React, {useState} from "react";
import Footer from "../Footer/footer";
import Navbar from "../Navbar";
import "./home.css";
import Electric from "../../asstes/images/Electric.png";
import Frame2 from "../../asstes/images/Frame2.png";
import Tereza from "../../asstes/images/Tereza.png";
import Frame66 from "../../asstes/images/Frame 266.png";
import akusti from "../../asstes/images/akusti.png";
import Karol from "../../asstes/images/Karol.png";
import Tereza2 from "../../asstes/images/Tereza2.png";
import Pavel from "../../asstes/images/Pavel.png";
import Group3 from "../../asstes/images/Group3.png";
import Group8888 from "../../asstes/images/Group8888.png";
import hbw from "../../asstes/images/hbw.png";
import SliderSEC from "./HomepageSlider";
import HomagePageMobileView from "../HomePage/HomagePageMobileView";

const Home = () => {

const [show,setShow]=useState({chnageNavrBar:"true",showMblNav:false})
const handleNavBar=()=>{
  if(show.showMblNav==true){
    setShow({chnageNavrBar:"true", showMblNav:false})
  }
  else{
    setShow({chnageNavrBar:"true", showMblNav:true})
  }

}
console.log("show========>",show)
  return (
    <>
 <div className="chnge_home_nav">     <Navbar datachange={show}  onClick={()=>handleNavBar()} /></div>
      {/*<======DeskTopView=====>*/}
      <div className="mobile_home_banner">
        <div className="img88">
          <img src={Group8888} className="img-fluid imh999" />
        </div>
        <div className="on_nav" onClick={()=>handleNavBar()}></div>
        <div className="hbwritten">
        <img src={hbw} className="img-fluid" />
      </div>
      <div className="hmbt">
      Od kytaristů pro 0
      </div>
      </div>
   
      <div className="HomeDeskTop">
        <div className="home_banner_wrapper">
          <div className="h_banner_boy">
            <img src={Group3} className="h_banner_boy" />
          </div>
          <div className="h_banner_text_box">
            <div className="h_text_top_bar"></div>
            <div className="h_banner_text2">Henry’s</div>
            <div className="h_sep_text_box">
              <div className="h_sep_2"></div>
              From guitarists for guitarists
            </div>
          </div>
        </div>

        <div className="main_bg">
          <div className="Home_page_contaner">
            <div className="Home_card1_box">
              <div className="h_card1_items">
                <div className="h_card1_img">
                  <img src={Electric} className="img-fluid" />
                </div>
                <div className="h_card1_text" >Produkty</div>
              </div>
              <div className="h_card1_items">
                <div className="h_card1_img">
                  <img src={Frame2} className="img-fluid" />
                </div>
                <div className="h_card1_text">Poradna</div>
              </div>
              <div className="h_card1_items">
                <div className="h_card1_img">
                  <img src={Tereza} className="img-fluid" />
                </div>
                <div className="h_card1_text">Artists</div>
              </div>
            </div>
            <div className="home_card2_box">
              <div className="home_Card2_items">
                <div>
                  <img src={akusti} />
                </div>
                <div className="home_card2_text">ACOUSTIC 12ST Bronze</div>
                <div className="home_card2_text2">LIGHT 10-47</div>
              </div>
              <div className="home_Card2_items">
                <div>
                  <img src={akusti} />
                </div>
                <div className="home_card2_text">
                  ACOUSTIC 12ST Bronze LIGHT{" "}
                </div>
                <div className="home_card2_text2">10-47</div>
              </div>
              <div className="home_Card2_items">
                <div>
                  <img src={akusti} />
                </div>
                <div className="home_card2_text">ACOUSTIC 12ST Bronze</div>
                <div className="home_card2_text2">LIGHT 10-47</div>
              </div>
            </div>

            <div className="coted_struny_wrapper">
              <div>
                <div className="coted_headind">Coated struny</div>
                <div className="coted_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum, aliquam tortor tincidunt aliquet risus eu faucibus
                  quam nullam. Enim pulvinar elementum ultrices amet
                </div>
              </div>
              <div className="coted_img">
                <img src={Frame66} />
              </div>
            </div>
            <div className="coted_struny_wrapper2">
              <div className="coted_img">
                <img src={Frame66} />
              </div>
              <div>
                <div className="coted_headind2">Normální struny</div>
                <div className="coted_text2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum, aliquam tortor tincidunt aliquet risus eu faucibus
                  quam nullam. Enim pulvinar elementum ultrices amet
                </div>
              </div>
            </div>
          </div>
          <div className="slider_wrapper">
            <SliderSEC />
          </div>
        </div>

        <div className="home_card3_container">
          <div className="home_card3_items">
            <div>
              <img src={Karol} />
            </div>
            <div className="h_card3_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
              placerat velit, fames sed tortor purus.
            </div>
            <div className="h_card3_btn">Placeholder</div>
          </div>
          <div className="home_card3_items">
            <div>
              <img src={Tereza2} />
            </div>
            <div className="h_card3_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
              placerat velit, fames sed tortor purus.
            </div>
            <div className="h_card3_btn">Placeholder</div>
          </div>
          <div className="home_card3_items">
            <div>
              <img src={Pavel} />
            </div>
            <div className="h_card3_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
              placerat velit, fames sed tortor purus.
            </div>
            <div className="h_card3_btn">Placeholder</div>
          </div>
        </div>
      </div>
      <div className="homeMobileView">
        <HomagePageMobileView />
      </div>

      <Footer />
    </>
  );
};

export default Home;
