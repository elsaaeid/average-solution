import React from 'react';



export const PageAccessItem = ({accessItemClass, accessItemClick, accessItemTitle, accessItemIcon}) => {
  return (
        <li 
            className={accessItemClass}
            onClick={accessItemClick}
            title={accessItemTitle}
            >
            {accessItemIcon}
        </li>
  )
}