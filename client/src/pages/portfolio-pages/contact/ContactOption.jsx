import React from 'react';
import contactItems from "./contactItems";
import { Box, Link } from '@mui/material';
import { useTranslation } from "react-i18next";

const ContactOption = (
) => {
    // Translation
    const { t, i18n } = useTranslation();
    const Items = contactItems.map(item => {
        if(i18n.language === 'ar') {
        return({
          id: item.id,
          icon: item.icon,
          title: item.title_ar,
          sub_title: item.sub_title,
          contact_option: item.contact_option,
        })
        }
        return item;
        })
  return (
      <Box>
      {Items
        .map((item) => (
            <article className="contact__option mt-2">
                {item.icon}
                <h4>{item.title}</h4>
                <h3>{item.sub_title}</h3>
                <Link href={item.contact_option} target="_blank">{t("contact.sendMessage")}</Link>
            </article>
        ))}
      </Box>
  )
}

export default ContactOption