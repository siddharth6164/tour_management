import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";


const items = [{image:ava01,name:"John Doe"},{image:ava02,name:"Sohn Doe"},{image:ava03,name:"Pohn Doe"}]

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay:true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
              {
                  breakpoint:992,
                  settings:{
                      slidesToShow:2,
                      slidesToScroll:1,
                      infinite:true,
                      dots:true,
                  }
              },
              {
                  breakpoint:576,
                  settings:{
                      slidesToShow:1,
                      slidesToScroll:1,
                  }
              }
    ],
  };

  return (
    <div>
      <Slider {...settings} >
        {items.map((item,index)=>{
            return( 
            <div className="testimonial py-4 px-3">
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
                officiis neque nam aperiam! Assumenda, unde ipsum porro explicabo
                incidunt nobis iusto pariatur dolor architecto est sed dolores quo
                doloribus eos?
            </p>
            <div className="d-flex align-items-center gap-4 mt-3">
            <img src={item.image} className="w-25 h-25 rounded-2" alt="" />
            <div>
              <h6 className="mb-0 mt-3">{item.name}</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>
            )
        })
    }
      </Slider>
    </div>
  );
}

export default Testimonials;
