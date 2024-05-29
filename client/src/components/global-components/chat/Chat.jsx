import React, { useRef, useEffect } from 'react';
import ChatBot from "react-simple-chatbot";
import { Segment } from "semantic-ui-react";
import { ThemeProvider } from 'styled-components';
import { tokens } from "../../../theme";
import { useTheme } from "@mui/material";
import "./chatBot.css";
import { usePresence } from "framer-motion";
import { gsap } from "gsap";


const Chat = () => {
    const ref = useRef(null);
    const [isPresent, safeToRemove] = usePresence();
  
    useEffect(() => {
      if (!isPresent) {
        gsap.to(ref.current, {
          opacity: 0,
          onComplete: () => safeToRemove?.()
        });
      }
    }, [isPresent, safeToRemove]);

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const steps = [
        {
            id: 'Greet',
            message: 'Hello, Welcome to our website',
            trigger: 'Ask Name'
        },
        {
            id: 'Ask Name',
            message: 'Please enter your name',
            trigger: 'waiting1'
        },
        {
            id: 'waiting1',
            user: true,
            trigger: 'Name',
        },
        {
            id: 'Name',
            message: 'Hi {previousValue}! How can I help you today?',
            trigger: 'ask_howto'
        },
        {
            id: 'ask_howto',
            options: [
                {
                    value: 'Services',
                    label: 'You can look at our servies',
                    trigger: 'services',
                },
            ],
        },
        {
            id: 'services',
            options: [
                {value: 'Websites development', label: "user-interface and dashboard for cPanel", trigger: 'contacts'},
                {value: 'Graphic designing', label: "Creative designing and ideas out of box", trigger: 'contacts'},
                {value: 'Photography for products', label: "High quality for your brand product", trigger: 'contacts'},
            ],
        },
        {
            id: 'contacts',
            message: 'You can contact us via whatsApp on +20 01028496209',
            trigger: 'thankYou'
        },
        {
            id: 'thankYou',
            message: 'Thank you for your trust',
            end: true
        },                                                
    ]
    const themes = {
        background: colors.grey[900],
        width: "100%",
        fontFamily: 'Helvetica Neue',
        fontWeight: "bold",
        headerBgColor: "var(--color-bg-variant)",
        headerFontColor: colors.grey[500],
        headerFontSize: '12px',
        botBubbleColor: "var(--color-bg-variant)",
        botFontColor: colors.grey[500],
        userBubbleColor: colors.grey[500],
        userFontColor: colors.grey[900],
      };
  return (
    <div className="chat-container" ref={ref}>
      <ThemeProvider theme={themes}>
        <Segment floated="left">
          <ChatBot
            headerTitle="Average Solution chatBot"
            speechSynthesis={{ enable: true, lang: 'en' }}
            steps={steps}
          />
        </Segment>
      </ThemeProvider>
    </div>
  )
}

export default Chat