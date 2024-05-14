import React, { useRef } from "react";
export default function Slide() {
  const sliderRef = useRef(null);
  const scrollAmount = 10;
  const images = [
    {
      id: 2,
      url: "https://resize.indiatv.in/resize/newbucket/1200_-/2023/09/iphone-15-11-1695784175.jpg"
    },
    {
      id: 3,
      url: "https://i.pinimg.com/736x/8c/da/04/8cda040c020f3b8e5d1c3a94e55632c8.jpg"
    },
    {
      id: 4,
      url: "https://magnitudemanagement.com/wp-content/uploads/2018/12/ecommerce-2140603_1920-1024x438.jpg"
    },
    {
      id: 5,
      url: "https://www.justuno.com/wp-content/uploads/2019/07/Cart-Abandonment-Offers.png"
    },
    {    
      id: 6,
      url:
        "https://www.outbrain.com/blog/wp-content/uploads/2022/09/OB-Blog-Regular-Master-1200x675_3-beauty-brand-1024x576.png"
    }
  ];
 
  return (
    <div className={{"font-family":' sans-serif',
    "align-items":'center',
    "display": 'flex',
    "justify-content": 'center',
    "margin-top":'0px', 
    "width": '100%'}}>
     
      <div className={{"display": 'flex',
  "max-width": 'px',
  "overflow": 'scroll',
  "scroll-behavior": 'smooth',
  "transition": 'scroll 0.3s ease-in-out'}} ref={sliderRef}>
        {images.map((image) => {
          return (
            <img
              className={{"width": '2000%',
              "height": '400px',
              "margin": '5px',
              "border-radius": '8px'}}
              alt="sliderImage"
              key={image?.id}
              src={image?.url}
            />
          );
        })}
      </div>
    </div>
  );
}