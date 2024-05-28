import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import {Box} from "@mui/material"
import { Button } from '@material-ui/core';
import CircularIndeterminate from "../../global-components/Spinner"
import { useCookies } from 'react-cookie';
import "./TransitionAlerts.css"


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: '3px',
  },
}));



export default function TransitionAlerts({t, setAlretState, open, setOpen}) {
  const classes = useStyles();
  const [cookies, ] = useCookies(['access_token', 'refresh_token'])
  const [loading, setLoading] = React.useState(false);

  


 const loadingHandling = ()=>{
    setTimeout(function(){
      setLoading(false)
      setAlretState(prev=>!prev)
   }, 9000);
  }
  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              cookies={cookies}
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
        <Box className="flex flex-col cookie">
          <Box className="flex flex-col justify-center items-center mb-1">
            <h2 className='cookie-title'>{t("homeContainer.cookieTitle")}</h2>
          </Box>
          <p>{t("homeContainer.cookieDesc")}</p>
          <div className="flex">
          <Button className="got-it flex flex-end" onClick={() => { 
            alert('Cookies will use for session management.')
            setLoading(true)
            loadingHandling()
         }} variant="contained">
           {t("homeContainer.GotIt")}
           {loading ? (<CircularIndeterminate />) : null}
         </Button>
          </div>
        </Box>
        </Alert>
      </Collapse>
    </div>
  );
}
