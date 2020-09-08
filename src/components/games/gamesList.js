import React from 'react';
import PixelArt from './PixelArt/PixelArt';
import Ships from './Ships/Ships';

const gameList = [
    {
        name: "pixelart",
        component: <PixelArt />
    },
    {
        name: "statki",
        component: <Ships />
    },
]

export default gameList;