import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";
import '../../../pages/portfolio-pages/about/About.css';
import { useTranslation } from "react-i18next";


function CarouselContainer()
{
     // Translation
const { t, i18n } = useTranslation();
  
    var items = [
        {
            id: 1,
            icon: <FaAward className="about__icon"/>,
            name: "Experience",
            name_ar: "الخبرة",
            description: "8+ Years Working",
            description_ar: "اكثر من 8 سنوات عمل"
        },
        {
            id: 2,
            icon: <FiUsers className="about__icon"/>,
            name: "More than",
            name_ar: "اكثر من ",
            description: "client Worldwide",
            description_ar: "عميل حول العالم"
        },
        {
            id: 3,
            icon: <VscFolderLibrary className="about__icon"/>,
            name: "Projects",
            name_ar: "المشاريع",
            description: "24+ Completed",
            description_ar: "اكثر من 24 مكتملا"
        }
    ]

   
const carouselItem = items.map(item => {
  if(i18n.language == 'ar') {
    return({
      id: item.id,
      name: item.name_ar,
      description: item.description_ar,
    })
  }
  return item;
})

    return (
        <Carousel className='width-full flex flex-col justify-center items-center'>
            {
                carouselItem.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}
export default CarouselContainer;

function Item(props)
{
    return (
        <div className="about__cards">
            <div className='wow fadeInUp' data-wow-iteration="1" data-wow-offset="80" data-wow-delay=".5s">
                <article className="about__card flex flex-col justify-center items-center">
                    <span>{props.item.icon}</span>
                    <h5>{props.item.name}</h5>
                    <small>{props.item.description}</small>
                </article>
            </div>
        </div>
    )
}