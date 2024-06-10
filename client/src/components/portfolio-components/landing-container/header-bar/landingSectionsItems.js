import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';


const items = [
    {
        id: "#home",
        title: "Home",
        title_ar: "الرائيسية",
        icon: <AiOutlineHome className='icon' />,
    },
    {
        id: "#about",
        title: "About",
        title_ar: "اعرف عنا",
        icon: <AiOutlineUser className='icon' />,
    },
    {
        id: "#shows",
        title: "Shows",
        title_ar: "العروص",
        icon: <BiBook className='icon' />,
    },
]
export default items;