import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs';
import {Box} from '@mui/material';

const FrontendItem = () => {
  return (
    <Box className="experience__content">
            <article className="experience__details">
            <Box className="flex flex-col justify-center items-center">
                <div className="flex flex-row justify-center items-center">
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <h4>HTML</h4>
                </div>
                <small className="text-average">Experienced</small>
            </Box>
            </article>
            <article className="experience__details">
                <Box className="flex flex-col justify-center items-center">
                    <div className="flex flex-row justify-center items-center">
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <h4>CSS</h4>
                    </div>
                    <small className="text-average">Experienced</small>
                </Box>
            </article>
            <article className="experience__details">
                <Box className="flex flex-col justify-center items-center">
                    <div className="flex flex-row justify-center items-center">
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <h4>Java Script</h4>
                    </div>
                    <small className="text-average">Experienced</small>
                </Box>
            </article>
            <article className="experience__details">
                <Box className="flex flex-col justify-center items-center">
                    <div className="flex flex-row justify-center items-center">
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <h4>Bootstrap</h4>
                    </div>
                    <small className="text-average">Experienced</small>
                </Box>
            </article>
            <article className="experience__details">
                <Box className="flex flex-col justify-center items-center">
                    <div className="flex flex-row justify-center items-center">
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <h4>Tailwind</h4>
                    </div>
                    <small className="text-average">Experienced</small>
                </Box>
            </article>
            <article className="experience__details">
                <Box className="flex flex-col justify-center items-center">
                    <div className="flex flex-row justify-center items-center">
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <h4>React</h4>
                    </div>
                    <small className="text-average">Experienced</small>
                </Box>
            </article>
    </Box>
  )
}

export default FrontendItem