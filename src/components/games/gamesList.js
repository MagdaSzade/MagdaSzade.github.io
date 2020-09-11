import React from 'react';
import PixelArt from './PixelArt/PixelArt';
import Ships from './Ships/Ships';
import Words from './Words/Words';

const gameList = [
    {
        name: "pixelart",
        component: <PixelArt />
    },
    {
        name: "statki",
        component: <Ships />
    },
    {
        name: "words",
        component: <Words />
    }
]

export default gameList;