import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs';
import {Box} from '@mui/material';

const GraphicItem = () => {
  return (
    <Box className="experience__content">
            <article className="experience__details">
            <Box className="flex flex-col justify-center items-center">
                <div className="flex flex-row justify-center items-center">
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <h4>Photoshop</h4>
                </div>
                <small className="text-average">Experienced</small>
            </Box>
            </article>
            <article className="experience__details">
                <Box className="flex flex-col justify-center items-center">
                <div className="flex flex-row justify-center items-center">
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <h4>Illustrator</h4>
                </div>
                <small className="text-average">Experienced</small>
                </Box>
                </article>
            <article className="experience__details">
                <Box className="flex flex-col justify-center items-center">
                    <div className="flex flex-row justify-center items-center">
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <h4>inDesign</h4>
                    </div>
                    <small className="text-average">Experienced</small>
                </Box>
            </article>
            <article className="experience__details">
                <Box  className="flex flex-col justify-center items-center">
                    <div className="flex flex-row justify-center items-center">
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <h4>Wandereshare</h4>
                    </div>
                    <small className="text-average">Experienced</small>
                </Box>
            </article>
            <article className="experience__details">
                <Box  className="flex flex-col justify-center items-center">
                    <div className="flex flex-row justify-center items-center">
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <h4>After Effect</h4>
                    </div>
                    <small className="text-average">Experienced</small>
                </Box>
                </article>
            <article className="experience__details">
                <Box  className="flex flex-col justify-center items-center">
                    <div className="flex flex-row justify-center items-center">
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <h4>Adobe Premiere</h4>
                    </div>
                    <small className="text-average">Experienced</small>
                </Box>
            </article>
    </Box>
  )
}

export default GraphicItem