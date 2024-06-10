import React from 'react';
import { Row, Col } from "react-bootstrap";
import { FullBanner } from './FullBanner';
import { SubBanner } from './SubBanner';
import { useTheme } from "@mui/material";
import { tokens } from "../../../theme";

export const BannerContent = () => {
  // Theme Colors Mode
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  return (
    <section>
      <Row className='banner-content'>
        <Col xs={12} sm={12} md={12} lg={6}>
            {/* Banner-loan */}
            <FullBanner 
                FullBannerBg={colors.yellowAccent[100]}
                FullBannerColorTitle={colors.grey[100]}
                FullBannerTitle="Apply for a car loan !"
                FullBannerColorParaOne={colors.grey[500]}
                FullBannerParaOne="This is a simple of a generated text"
                FullBannerTitleButton="Discover More"
                FullBannerAlt="loan-img"
                FullBannerImg={`../../assets/loan.png`}
            />
        </Col>
        <Col xs={12} sm={12} md={6} lg={3}>
            {/* Banner-Badge*/}
          <SubBanner 
              SubBannerBg={colors.grey[500]}
              SubBannerColorTitle={colors.grey[900]}
              SubBannerTitle="You have earned"
              SubBannerColorSpan={colors.yellowAccent[500]}
              SubBannerSpan="20"
              SubBannerColorParaOne={colors.grey[900]}
              SubBannerParaOne="Badge!"
              SubBannerColorParaTwo={colors.yellowAccent[500]}
              SubBannerParaTwo="Hooray! Way to go Mohammed!"
              SubBannerAlt="Banner-Badge"
              SubBannerImg={`../../assets/badge.png`}
              />
        </Col>
        <Col xs={12} sm={12} md={6} lg={3}>
          {/* Banner-Points*/}
          <SubBanner 
              SubBannerBg={colors.redAccent[100]}
              SubBannerColorTitle={colors.grey[900]}
              SubBannerTitle="You have earned"
              SubBannerColorSpan={colors.yellowAccent[500]}
              SubBannerSpan="1500"
              SubBannerColorParaOne={colors.grey[900]}
              SubBannerParaOne="Points!"
              SubBannerColorParaTwo={colors.yellowAccent[500]}
              SubBannerParaTwo="Redeem and claim your rewards!"
              SubBannerAlt="Banner-Points"
              SubBannerImg={`../../assets/points.png`}
          />
        </Col>
      </Row>
    </section>
  )
}
