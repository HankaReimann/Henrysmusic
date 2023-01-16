import React, { useState } from "react";
import "./cetory.css";
import { RiArrowDownSFill } from "react-icons/ri";
import { RiArrowUpSFill } from "react-icons/ri";
import Form from "react-bootstrap/Form";

const CattagorySort = () => {
  const [showDropDown, setShowDropDown] = useState(true);
  const [showDropDown1, setShowDropDown1] = useState(true);
  const [showDropDown2, setShowDropDown2] = useState(true);
  const [showDropDown3, setShowDropDown3] = useState(true);
  const [showDropDown4, setShowDropDown4] = useState(true);
  const [showDropDown5, setShowDropDown5] = useState(false);
  const [showDropDown6, setShowDropDown6] = useState(false);
  const [showDropDown7, setShowDropDown7] = useState(false);
  const [showDropDown8, setShowDropDown8] = useState(false);
  const [showDropDown9, setShowDropDown9] = useState(false);
  const [showDropDown10, setShowDropDown10] = useState(false);
  const [showDropDown11, setShowDropDown11] = useState(false);
  const [showDropDown12, setShowDropDown12] = useState(false);
  const [showDropDown13, setShowDropDown13] = useState(false);
  const [showDropDown14, setShowDropDown14] = useState(false);
  const [showDropDown15, setShowDropDown15] = useState(false);
  const handleDropDown = (number) => {
    if (number == 1) {
      setShowDropDown(!showDropDown);
    } else if (number == 2) {
      setShowDropDown1(!showDropDown1);
    } else if (number == 3) {
      setShowDropDown2(!showDropDown2);
    } else if (number == 4) {
      setShowDropDown3(!showDropDown3);
    } else if (number == 5) {
      setShowDropDown4(!showDropDown4);
    } else if (number == 6) {
      setShowDropDown5(!showDropDown5);
    } else if (number == 7) {
      setShowDropDown6(!showDropDown6);
    } else if (number == 8) {
      setShowDropDown7(!showDropDown7);
    } else if (number == 9) {
      setShowDropDown8(!showDropDown8);
    } else if (number == 10) {
      setShowDropDown9(!showDropDown9);
    } else if (number == 11) {
      setShowDropDown10(!showDropDown10);
    } else if (number == 12) {
      setShowDropDown11(!showDropDown11);
    } else if (number == 13) {
      setShowDropDown12(!showDropDown12);
    } else if (number == 14) {
      setShowDropDown13(!showDropDown13);
    } else if (number == 15) {
      setShowDropDown14(!showDropDown14);
    } else if (number == 16) {
      setShowDropDown15(!showDropDown15);
    }
  };
  return (
    <>
      <div className="cat_sort_inner">
        <div className="main_toogle_box" onClick={() => handleDropDown(1)}>
          <div className="toggale_heading">Vinutí</div>
          {showDropDown ? (
            <RiArrowUpSFill className="arrow_up" />
          ) : (
            <RiArrowDownSFill className="arrow_up" />
          )}
        </div>
        {showDropDown && (
          <div className="toglle_items">
            <div className="toogle_checkbox">
            <label class="container">  Běžné
  <input type="checkbox" />
  <span class="checkmark"></span>
</label> 
            </div>
            <div className="toogle_checkbox">
            <label class="container">  Běžné
  <input type="checkbox" />
  <span class="checkmark"></span>
</label> 
            </div>
          </div>
        )}
        <div className="main_toogle_box" onClick={() => handleDropDown(2)}>
          <div className="toggale_heading">Struny v balení</div>
          {showDropDown1 ? (
            <RiArrowUpSFill className="arrow_up" />
          ) : (
            <RiArrowDownSFill className="arrow_up" />
          )}
        </div>
        {showDropDown1 && (
          <div className="toggle2_box">
            <div className="toogle_inner_box">
              <div
                className="main_toogle_box"
                onClick={() => handleDropDown(3)}
              >
                <div className="toggale_Subheading">Podle žánru</div>
                {showDropDown2 ? (
                  <RiArrowUpSFill className="arrow_up" />
                ) : (
                  <RiArrowDownSFill className="arrow_up" />
                )}
              </div>
              {showDropDown2 && (
                <div className="toglle_Subitems">
                  <div className="toogle_checkbox">
                    <label class="container">
                      <input type="checkbox" /> Běžné
                      <span class="checkmark"></span>
                    </label>
                  </div>
                  <div className="toogle_checkbox">
                  <label class="container">  Běžné
  <input type="checkbox" />
  <span class="checkmark"></span>
</label> 
                  </div>
                </div>
              )}
            </div>
            <div className="toogle_inner_box">
              <div
                className="main_toogle_box"
                onClick={() => handleDropDown(4)}
              >
                <div className="toggale_Subheading">Hybridní sady</div>
                {showDropDown3 ? (
                  <RiArrowUpSFill className="arrow_up" />
                ) : (
                  <RiArrowDownSFill className="arrow_up" />
                )}
              </div>
              {showDropDown3 && (
                <div className="toglle_Subitems">
                  <div className="toogle_checkbox">
                  <label class="container">
                      <input type="checkbox" /> Hybrid
                      <span class="checkmark"></span>
                    </label>
             
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        <div className="main_toogle_box" onClick={() => handleDropDown(5)}>
          <div className="toggale_heading">Tvrdost strun</div>
          {showDropDown4 ? (
            <RiArrowUpSFill className="arrow_up" />
          ) : (
            <RiArrowDownSFill className="arrow_up" />
          )}
        </div>
        {showDropDown4 && (
          <div className="toglle_items">
            <div className="toogle_checkbox">
            <label class="container"> .009
  <input type="checkbox" />
  <span class="checkmark"></span>
</label> 
            </div>
            <div className="toogle_checkbox">
            <label class="container"> .010
  <input type="checkbox" />
  <span class="checkmark"></span>
</label> 
            </div>
            <div className="toogle_checkbox">
            <label class="container">  .011
  <input type="checkbox" />
  <span class="checkmark"></span>
</label> 
            </div>
            <div className="toogle_checkbox">
            <label class="container"> .012
  <input type="checkbox" />
  <span class="checkmark"></span>
</label> 
            </div>
            <div className="toogle_checkbox">
            <label class="container"> .013
  <input type="checkbox" />
  <span class="checkmark"></span>
</label>  
            </div>
            <div className="toogle_checkbox">
            <label class="container">  Speciální kombinace
  <input type="checkbox" />
  <span class="checkmark"></span>
</label> 
            </div>
          </div>
        )}
        <div className="main_toogle_box" onClick={() => handleDropDown(6)}>
          <div className="toggale_heading">Typ kytary</div>
          {showDropDown5 ? (
            <RiArrowUpSFill className="arrow_up" />
          ) : (
            <RiArrowDownSFill className="arrow_up" />
          )}
        </div>
        {showDropDown5 && (
          <div className="toglle_items">
            <div className="toogle_checkbox">
            <label class="container"> Klasická kytary
  <input type="checkbox" checked="checked"/>
  <span class="checkmark"></span>
</label> 
            </div>
            <div className="toogle_checkbox">
            <label class="container">Elektrická kytara
  <input type="checkbox" checked="checked"/>
  <span class="checkmark"></span>
</label> 
            </div>
            <div className="toogle_checkbox">
            <label class="container">Akustická kytara
  <input type="checkbox" />
  <span class="checkmark"></span>
</label>  
            </div>
            <div className="toogle_checkbox">
            <label class="container"> Bassová kytara
  <input type="checkbox" />
  <span class="checkmark"></span>
</label>  
            </div>
            <div className="toogle_checkbox">
            <label class="container">  Ukulele
  <input type="checkbox" />
  <span class="checkmark"></span>
</label>  
            </div>
            <div className="toogle_checkbox">
            <label class="container">  Ukulele
  <input type="checkbox" />
  <span class="checkmark"></span>
</label>  
            </div>
          </div>
        )}
        <div className="main_toogle_box" onClick={() => handleDropDown(7)}>
          <div className="toggale_heading">Ambasadoři</div>
          {showDropDown6 ? (
            <RiArrowUpSFill className="arrow_up" />
          ) : (
            <RiArrowDownSFill className="arrow_up" />
          )}
        </div>
        {showDropDown6 && (
          <div className="toglle_items">
            <div className="toogle_checkbox">
            <label class="container">  Jméno Příjmení
  <input type="checkbox" />
  <span class="checkmark"></span>
</label>  
            </div>
            <div className="toogle_checkbox">
            <label class="container">  Jméno Příjmení
  <input type="checkbox" />
  <span class="checkmark"></span>
</label>  
            </div>
            <div className="toogle_checkbox">
            <label class="container">  Jméno Příjmení
  <input type="checkbox" />
  <span class="checkmark"></span>
</label>  
            </div>
            <div className="toogle_checkbox">
            <label class="container">  Jméno Příjmení
  <input type="checkbox" />
  <span class="checkmark"></span>
</label>  
            </div>
            <div className="toogle_checkbox">
            <label class="container">  Jméno Příjmení
  <input type="checkbox" />
  <span class="checkmark"></span>
</label>  
            </div>
            <div className="toogle_checkbox">
            <label class="container">  Jméno Příjmení
  <input type="checkbox" />
  <span class="checkmark"></span>
</label>  
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CattagorySort;
