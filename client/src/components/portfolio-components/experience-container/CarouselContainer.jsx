import React from 'react';
import Carousel from 'react-material-ui-carousel'
import '../../../pages/portfolio-pages/experience/Experience.css'
import FrontendItem from './FrontendItem';
import BackendItem from './BackendItem';
import {Box} from '@mui/material';
import GraphicItem from './GraphicItem';
import { useTranslation } from "react-i18next";


function CarouselContainer()
{
      // Translation
const { i18n } = useTranslation();
    var items = [
        {
            id: 1,
            title: "Frontend Development",
            title_ar: "تطوير وجهات المسنخدم",
            component: <FrontendItem />,
        },
        {
            id: 2,
            title: "Backend Development",
            title_ar: "تطوير وجهات السرفر",
            component: <BackendItem />,
        },
        {
            id: 3,
            title: "Graphic Designing",
            title_ar: "تصميم الجرافيك",
            component: <GraphicItem />,
        },
    ]
    const carouselItem = items.map(item => {
        if(i18n.language == 'ar') {
          return({
            id: item.id,
            title: item.title_ar,
            component: item.component,
          })
        }
        return item;
      })
      
    return (
        <Carousel className='mt-5 width-full'>
            {
                carouselItem.map( (item, id) => <Item key={id} item={item} /> )
            }
        </Carousel>
    )
}
export default CarouselContainer;

        
function Item(props)
{
   
    return (
        <Box className="wow fadeInLeft width-full" data-wow-iteration="1" data-wow-offset="80" data-wow-delay=".5s">
            <h2 className='font-bold mt-3'>{props.item.title}</h2>
            {props.item.component}
        </Box>
    )
}