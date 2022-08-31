import React from "react"
import image  from "../components/contants/images"
import   "./Home.css"

const Home =() =>{
    
  
    return (
        <div>
          <div class="pic-ctn">
            <img src={image.slide1} alt="" class="pic" />
            <img src={image.slide2} alt="" class="pic"/>
            <img src={image.slide3} alt="" class="pic " />
          </div>
        </div>
    )
}
export default Home