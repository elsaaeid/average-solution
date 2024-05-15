import React, { useState, useRef } from 'react';
import {CardPortfolio} from "./CardPortfolio";

export const CardPortfolioVideo = ( props )=>{
    const { id, webTitle, webGithub, video, webDesc } = props.item;

        const [isPlaying, setIsPlaying] = useState(false);

        const videoRef = useRef(null);

        const togglePlay = () => {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        };
 
    return (
        <CardPortfolio 
            id={id}
            portfolioView={<video
                                ref={videoRef}
                                width="100%"
                                height="100%"
                                controls
                                >
                                 <source src={video} type="video/mp4" />
                            </video>}
            webTitle={webTitle}
            webDesc={webDesc}
            webGithub={webGithub}
            firstBtn={isPlaying ? "Pause" : "Play"}
            firstBtnClick={togglePlay}
            secondBtn="Github"
        />
    )

}
