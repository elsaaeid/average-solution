import React from 'react';
import bottomItems from "./bottomItems";
import ActiveLink from '../../global-components/active-link/ActiveLink';
import Grid from '@material-ui/core/Grid';


const BottomFooter = (
    {activeNav,
    setActiveNav}
) => {

  return (
      <Grid className="row" container justifyContent="center" spacing={4}>
      {bottomItems
        .map((item, index) => (
            <Grid 
              key={index}
              className="footer__socials_icons mt-5 flex flex-row justify-center items-center" 
              xs={6} sm={6} md={4} lg={4}>
              <ActiveLink
                  clickHandling={() => setActiveNav(item.href)}
                  classN={activeNav === item.href ? 'active global-Link' : 'global-Link'}
                  href={item.href}
                  obj={item.icon} />
            </Grid>
        ))}
      </Grid>
  )
}

export default BottomFooter