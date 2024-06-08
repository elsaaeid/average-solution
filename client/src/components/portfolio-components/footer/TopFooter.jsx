import React from 'react';
import { useTranslation } from "react-i18next";
import items from "../sectionsItems/items";
import ActiveLink from '../../global-components/active-link/ActiveLink';
import Grid from '@material-ui/core/Grid';


const TopFooter = (
    {activeNav,
    setActiveNav}
) => {
     // Translation
const { i18n } = useTranslation();

const navItem = items.map(item => {
  if(i18n.language == 'ar') {
    return({
      id: item.id,
      title: item.title_ar,
      href: item.href,
    })
  }
  return item;
});

  return (
      <Grid className='row' container justifyContent="center" spacing={2}>
      {navItem
        .map((item) => (
            <Grid 
              key={item.id}
              className="mt-3" 
              xs={6} 
              sm={6} 
              md={4} 
              lg={4}>
                <ActiveLink
                    clickHandling={() => setActiveNav(item.href)}
                    classN={activeNav === item.href ? 'active global-Link' : 'global-Link'}
                    href={item.href}
                    obj={item.title} 
                    />
            </Grid>
            ))}
      </Grid>
  )
}

export default TopFooter