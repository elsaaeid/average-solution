import React from "react";
import './portfolio.css';
import {BsPersonWorkspace} from "react-icons/bs";
import PortfolioContainer from "./PortfolioContainer";
import {Box} from '@mui/material';
import { useTranslation } from "react-i18next";



function Portfolio() {
	// Translation
	const { t } = useTranslation();
    return (
      <section id='portfolio'>
              <Box className='branch-container'>
                  <BsPersonWorkspace  className='icon-branch' />
              </Box>
              <Box>
                <h2>{t("Portfolio")}</h2>
                <p className='mb-3'>{t("portfolio.thePortfolioPara")}</p>
              </Box>
                <PortfolioContainer />
      </section>
    )
    };
export default Portfolio;



