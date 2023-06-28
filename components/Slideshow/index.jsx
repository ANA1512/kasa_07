import {useState} from 'react'
import { useParams} from 'react-router-dom'
import FilesData from '../../Data.json'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import './Slider.css'
import BtnSlider from './btnSlider'


function Slideshow(){
 
      const {id} =useParams();
      const foundItem = FilesData.find((c)=>c.id ===id);
      const pictures=foundItem.pictures
    

      const [slideAnim,setSlideAdmin] = useState (0)

      const nextSlide= () => {
         
            setSlideAdmin( slideAnim === pictures.length -1 ? 0 : slideAnim + 1);
      }
         
      const prevSlide= () => {
              
            setSlideAdmin( slideAnim === 0 ? pictures.length -1 : slideAnim - 1);
      }
 
   return(

      <div className="container-slider"> 

            {pictures.map((img,index)=>{
               
               return(

                  <div key={index}>
                        { index === slideAnim && ( <img src={img} alt="flat pict"/>)}    
                  </div>
               )

            })}

        <BtnSlider moveSlide={nextSlide} direction={"next"}/>
        <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
      

      </div>

   )
     
  }
              

export default Slideshow




