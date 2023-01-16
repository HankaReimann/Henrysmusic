import React from "react";
import "./blog.css";
import blogBoy from "../../asstes/images/blogBoy.png";
import blogBnner3 from "../../asstes/images/blogBnner3.png";
import Frame from "../../asstes/images/Frame 263.png";
import Videonavody from "../../asstes/images/Videonavody.png";
import Mask55 from "../../asstes/images/Mask55.png";

const Blog = () => {
  const blogCard = [
    {
      heading: "První kroky s kytarou",
    },
    {
      heading: "První kroky s kytarou",
    },
    {
      heading: "První kroky s kytarou",
    },
    {
      heading: "První kroky s kytarou",
    },
    {
      heading: "První kroky s kytarou",
    },
    {
      heading: "První kroky s kytarou",
    },
    {
      heading: "První kroky s kytarou",
    },
    {
      heading: "První kroky s kytarou",
    },
    {
      heading: "První kroky s kytarou",
    },
  ];

  return (
    <>
      <div className="blog_banner_wrapper">
        {/*<div className="blog_banner_img_box">
          <img src={Mask55} className="guitr_boy" />
        </div>*/}
        <div className="blog_banner_content">
          <div className="text_boder"></div>
          <div className="blog_banner_text"> Poradna</div>
          <div className="text_boder2"></div>
        </div>
      </div>
      <div className="mobile_blog_banner">
      <div className="blog_banner_content">
          <div className="text_boder"></div>
          <div className="blog_banner_text"> Poradna</div>
          <div className="text_boder2"></div>
        </div>
      </div>
      <div className="blog_body_container">
        <div className="blog_img_sec">
          <div>
            <div className="blog_img_box">
              <img src={Frame} className="blog_img_ele" />
            </div>
            <div className="blog_img_heading">How to</div>
          </div>
          <div>
            <div className="blog_img_box">
              <img src={Videonavody} className="blog_img_ele" />
            </div>
            <div className="blog_img_heading">Tutoriály</div>
          </div>
          <div>
            <div className="blog_img_box">
              <img src={Frame} className="blog_img_ele" />
            </div>
            <div className="blog_img_heading">How to</div>
          </div>
        </div>

        <div className="blog_card_tabs">
          <div className="blog_tabs_items">Jak si vybrat</div>
          <div className="blog_tabs_items">Coated struny</div>
          <div className="blog_tabs_items">Jak si vybrat</div>
          <div className="blog_tabs_items">Jak si vybrat</div>
          <div className="blog_tabs_items">Jak si vybrat</div>
          <div className="blog_tabs_items">Jak si vybrat</div>
        </div>

        <div className="blog_card_wraper">
          {blogCard.map((data, index) => {
            return (
              <>
                <div
                  className={
                    index === 6
                      ? "blof_card_last"
                      : index === 7
                      ? "blof_card_last"
                      : index === 8
                      ? "blof_card_last"
                      : "blof_card"
                  }
                >
                  <div>
                    <img src={Frame} className="blog_card_img" />
                  </div>
                  <div className="blog_Card_heaiding">{data.heading}</div>
                  <div className="blog_card_text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Egestas tincidunt vestibulum risus integer. Tristique sit
                    vestibulum in et ut. Enim ornare a mi ipsum suscipit eu. Et
                    fusce leo, tincidunt mauris a, amet at.
                  </div>
                  <div className="blog_card_btn_box">
                    <div className="blog_card_btn">Přečíst</div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Blog;
