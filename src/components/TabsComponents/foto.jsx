import React from "react";
import "./detail_tabs.css";
import fofo_img from "../../asstes/images/fofo_img.png";
const FotoComponent = () => {
  return (
    <>
      <div className="foto_container">
        <div className="foto_left_Sec">
          <img src={fofo_img} className="img-fluid" />
        </div>
        <div className="foto_right_sec">
          <div className="foto_heading">
            Henry’s Broznze Acoustic light 10-47
          </div>
          <div className="foto_right_text">
            Lorem ipsum dolor sit amet consectetur. Imperdiet tincidunt erat
            mauris in hendrerit maecenas orci vitae. Scelerisque fermentum
            quisque nunc hendrerit leo dui tortor sit vitae. Malesuada tortor
            imperdiet non odio.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur. Imperdiet tincidunt erat
            mauris in hendrerit maecenas orci vitae. Scelerisque fermentum
            quisque nunc hendrerit leo dui tortor sit vitae. Malesuada tortor
            imperdiet non odio.
          </div>
        </div>
      </div>
    </>
  );
};

export default FotoComponent;
