import React from 'react';
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {BiMessageSquareDetail} from 'react-icons/bi';
import {AiOutlineFundProjectionScreen} from 'react-icons/ai';
import NavIcon from './NavIcon';
import { useTranslation } from "react-i18next";
	

const Nav = (
    {activeNav,
    setActiveNav}
    )=> {
    // Translation
	const { t } = useTranslation();
        return (
            <div className="nav-container">
                <NavIcon
                titleIcon={t("Home")}
                hrefIcon="/"
                clickIcon={() => setActiveNav('/')}
                classIcon={activeNav === '/' ? 'active icon-item' : 'icon-item'}
                icon={<AiOutlineHome className='icon' />}
                />
                <NavIcon
                titleIcon={t("About")}
                hrefIcon="/about"
                clickIcon={() => setActiveNav('/about')}
                classIcon={activeNav === '/about' ? 'active icon-item' : 'icon-item'}
                icon={<AiOutlineUser className='icon '/>}
                />
                <NavIcon
                titleIcon={t("Experience")}
                hrefIcon="/experience"
                clickIcon={() => setActiveNav('/experience')}
                classIcon={activeNav === '/experience' ? 'active icon-item' : 'icon-item'}
                icon={<BiBook className='icon' />}
                />
                <NavIcon
                titleIcon={t("Services")}
                hrefIcon="/services"
                clickIcon={() => setActiveNav('/services')}
                classIcon={activeNav === '/services' ? 'active icon-item' : 'icon-item'}
                icon={<RiServiceLine className='icon' />}
                />
                <NavIcon
                titleIcon={t("Portfolio")}
                hrefIcon="/portfolio"
                clickIcon={() => setActiveNav('/portfolio')}
                classIcon={activeNav === '/portfolio' ? 'active icon-item' : 'icon-item'}
                icon={<AiOutlineFundProjectionScreen className='icon' />}
                />
                <NavIcon
                titleIcon={t("Contact")}
                hrefIcon="/contactPortfolio"
                clickIcon={() => {
                    setActiveNav('/contactPortfolio');
                }}
                classIcon={activeNav === '/contactPortfolio' ? 'active icon-item' : 'icon-item'}
                icon={<BiMessageSquareDetail className='icon' />}
                />
            </div> 
        )
    };
export default Nav;