import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {BiMessageSquareDetail} from 'react-icons/bi';
import {AiOutlineFundProjectionScreen} from 'react-icons/ai';


const items = [
    {
        id: 1,
        title: "Home",
        title_ar: "الرائيسية",
        href: "/",
        icon: <AiOutlineHome className='icon' />,
    },
    {
        id: 2,
        title: "About",
        title_ar: "اعرف عنا",
        href: "/about",
        icon: <AiOutlineUser className='icon' />,
    },
    {
        id: 3,
        title: "Experience",
        title_ar: "الخيرة",
        href: "/experience",
        icon: <BiBook className='icon' />,
    },
    {
        id: 4,
        title: "Services",
        title_ar: "خدمات",
        href: "/service",
        icon: <RiServiceLine className='icon' />,
    },
    {
        id: 5,
        title: "Portfolio",
        title_ar: "الاعمال",
        href: "/portfolio",
        icon: <AiOutlineFundProjectionScreen className='icon' />,
    },
    {
        id: 6,
        title: "Contact us",
        title_ar: "اتصل بنا",
        href: "/contact",
        icon: <BiMessageSquareDetail className='icon' />,
    },
]
export default items;