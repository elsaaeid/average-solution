import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs';
import {Box} from '@mui/material';

const BackendItem = () => {
  return (
    <Box className="experience__content">
            <article className="experience__details">
                <Box className="flex flex-col justify-center items-center">
                    <div className="flex flex-row justify-center items-center">
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <h4>Node JS</h4>
                    </div>
                    <small className="text-average">Experienced</small>
                </Box>
            </article>
            <article className="experience__details">
                <Box className="flex flex-col justify-center items-center">
                    <div className="flex flex-row justify-center items-center">
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <h4>MongoDB</h4>
                    </div>
                    <small className="text-average">Experienced</small>
                </Box>
            </article>
            <article className="experience__details">
                <Box className="flex flex-col justify-center items-center">
                    <div className="flex flex-row justify-center items-center">
                        <BsPatchCheckFill className="experience__details-icon"/>
                        <h4>PHP</h4>
                    </div>
                    <small className="text-average">Experienced</small>
                </Box>
                </article>
                <article className="experience__details">
                    <Box className="flex flex-col justify-center items-center">
                        <div className="flex flex-row justify-center items-center">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <h4>MySQL</h4>
                        </div>
                        <small className="text-average">Experienced</small>
                    </Box>
                </article>
                <article className="experience__details">
                    <Box className="flex flex-col justify-center items-center">
                        <div className="flex flex-row justify-center items-center">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <h4>Python</h4>
                        </div>
                        <small className="text-average">Experienced</small>
                    </Box>
                </article>
    </Box>
  )
}

export default BackendItem