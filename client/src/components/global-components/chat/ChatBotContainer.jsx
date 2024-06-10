import React, { useState } from 'react';
import {Box, Tooltip} from '@mui/material';
import {IconComponent} from '../header/IconComponent';
import { SiChatbot } from "react-icons/si";
import { IoClose } from "react-icons/io5";
import Chat from "./Chat";
import "./chatBot.css";
import { AnimatePresence, motion } from "framer-motion";



export const ChatBotContainer = ()=> {
  // ChatBotContainer Showing abd UnShowing States
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
                <IoClose
                  className="chat-icon"
                  style={{
                    color: "var(--color-bg-variant)",
                    border: "1px dashed var(--color-bg-variant)",
                    backgroundColor: "white",
                    padding: "9px",
                    borderRadius: "50%",
                  }} />
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
                        color: "var(--color-bg-variant)",
                        border: "1px dashed var(--color-bg-variant)",
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