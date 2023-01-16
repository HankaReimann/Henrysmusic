import React,{useState} from "react";
import "../TabsComponents/detail_tabs.css";
import mbl_icon from "../../asstes/images/mbl_icon.png";
import PopisComponent from "../TabsComponents/popis"
import RecenzeComponet from "../TabsComponents/recenze"
import FotoComponent from "../TabsComponents/foto"
import TipyComponet from "../TabsComponents/tipy"
import PrislusComponent from "../TabsComponents/prislus"

const MobileViewTabs = () => {
	const [showDropDown, setShowDropDown] = useState(true);
	const [showDropDown1, setShowDropDown1] = useState(false);
	const [showDropDown2, setShowDropDown2] = useState(false);
	const [showDropDown3, setShowDropDown3] = useState(false);
	const [showDropDown4, setShowDropDown4] = useState(false);
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
      <div className="mbl_tabs_wrapper">
   <div>
   <div className={showDropDown ===true?"active_mbl_tabs_items":"mbl_tabs_items"} onClick={()=>handleDropDown(1)}>
   Popis produktu
          <img src={mbl_icon} />
        </div>
		{
			showDropDown &&
			<div className="mbl_tabs_body">
			<PopisComponent/>
		</div>
		}
   </div>
   <div>
   <div className={showDropDown1 ===true?"active_mbl_tabs_items":"mbl_tabs_items"} onClick={()=>handleDropDown(2)}>
   Recenze
          <img src={mbl_icon} />
        </div>
		{
			showDropDown1 &&
			<div className="mbl_tabs_body">
			<RecenzeComponet/>
		</div>
		}
   </div>
   <div>
   <div className={showDropDown2 ===true?"active_mbl_tabs_items":"mbl_tabs_items"} onClick={()=>handleDropDown(3)}>
   Foto & video
          <img src={mbl_icon} />
        </div>
		{
			showDropDown2 &&
			<div className="mbl_tabs_body">
			<FotoComponent/>
		</div>
		}
   </div>
   <div>
   <div className={showDropDown3 ===true?"active_mbl_tabs_items":"mbl_tabs_items"} onClick={()=>handleDropDown(4)}>
   Tipy & triky
          <img src={mbl_icon} />
        </div>
		{
			showDropDown3 &&
			<div className="mbl_tabs_body">
			<TipyComponet/>
		</div>
		}
   </div>
   <div>
   <div className={showDropDown4 ===true?"active_mbl_tabs_items":"mbl_tabs_items"} onClick={()=>handleDropDown(5)}>
   Příslušenství
          <img src={mbl_icon} />
        </div>
		{
			showDropDown4 &&
			<div className="mbl_tabs_body">
			<PrislusComponent/>
		</div>
		}
   </div>
	
      </div>
    </>
  );
};

export default MobileViewTabs;
