import React from 'react';
import {Box} from "@mui/material";

export default function LandingContent({landingItems}) {

  return (
    <Box className="landing-content w-full flex flex-col items-center justify-content-center">
       {landingItems
        .map((item, index) => (
                <Box className="w-full" key={index}>
                    {item.landingComponent}
                </Box>
                )
        )}
    </Box>
  );
}