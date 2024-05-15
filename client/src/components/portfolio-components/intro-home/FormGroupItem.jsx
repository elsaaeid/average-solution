import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useTranslation } from "react-i18next";


const FormGroupItem = ({secondary, setSecondaryState}) => {
  	// Translation
	const { t } = useTranslation();
  
  return (
      <FormControlLabel
        control={
          <Checkbox
          checked={secondary}
          onChange={(event) => setSecondaryState(event.target.checked)}
        />
        }
        label={t("homeContainer.EnDesc")} />
  )
}

export default FormGroupItem;