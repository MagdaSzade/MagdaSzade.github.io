import React, { useState } from 'react';

import { createWhiteBoard } from './key';
import SelectColor from './SelectColor';
import SelectSize from './SelectSize';
import Canva from './Canva';

import '../../../styles/pixelart/pixelart.css'

const PixelArt = () => {
    const [ selectedColor, onColorSelect ] = useState('red');
    const [ selectedSize, onSizeSelect ] = useState({ width: 10, height: 10 });
    const [ canva, setPixels ] = useState(() => {
        const initialState = createWhiteBoard(selectedSize.width, selectedSize.height);
        return initialState;
    });

    return (
        <div className="pixelart">
            <p>Zapraszam pod: <a href="https://pixelartagainstsma.herokuapp.com/">pixelartagainstsma.herokuapp.com</a></p>
            <SelectSize selectSize={onSizeSelect} width={selectedSize.width} height={selectedSize.width} clearCanva={setPixels}/>
            <SelectColor selectColor={onColorSelect} selectedColor={selectedColor}/>
            <Canva width={selectedSize.width} height={selectedSize.height} color={selectedColor} pixels={canva} setPixels={setPixels} />
            
        </div>
    )
}

export default PixelArt;