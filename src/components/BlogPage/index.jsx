import React from 'react'
import Navbar from "../Navbar"
import Blog from "../Blog"
import Footer from "../Footer/footer"
import {useState} from "react"

const BlogPage = () => {
  const [show,setShow]=useState({chnageNavrBar:"true",showMblNav:false})
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
<Blog/>
<Footer/>

</>
  )
}

export default BlogPage