import React, { useState } from 'react';
import {Box, Tooltip} from '@mui/material';
import {IconComponent} from '../header/IconComponent';
import { SiChatbot } from "react-icons/si";
import { IoClose } from "react-icons/io5";
import Chat from "./Chat";
import "./chatBot.css";
import { AnimatePresence, motion } from "framer-motion";



export const ChatBotContainer = ()=> {
  const [show, setShow] = useState(false);

  return (
    <Box className="chat-bot-container">
      <motion.Box
        onClick={() => {
          setShow(!show);
        }}
        whileTap={{ scale: 1.02 }}
        className="chat-icon-container"
        sx={{ 
          display: 'fixed', 
          alignItems: 'center', 
          textAlign: 'center',
      }}>
          {show ? 
            <Tooltip title="Close chatBot">
            <span
              className="cursor-pointer"
            >
              <IconComponent        
              icon={
              <span className="chatClose-icon"
                style={{
                  color: "#3f76b7",
                  border: "1px dashed #3f76b7",
                  backgroundColor: "white",
                  padding: "9px",
                  borderRadius: "50%",
                }}
                  ><IoClose /></span>
                  } />
            </span>
            </Tooltip>
            : 
            <Tooltip title="open chatBot">
              <span
                className="cursor-pointer"
              >
                <IconComponent        
                    icon={
                        <SiChatbot className="chat-icon"
                          style={{
                            color: "#3f76b7",
                            border: "1px dashed #3f76b7",
                            backgroundColor: "white",
                            padding: "9px",
                            borderRadius: "50%",
                          }} />
                        } />
              </span>
            </Tooltip>
          }
      </motion.Box>
      <AnimatePresence>{show ? <Chat />: null}</AnimatePresence>
    </Box>
  );
}