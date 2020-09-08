import React from 'react';
import PropTypes from 'prop-types';

import Pixel from './Pixel';

import "../../../styles/pixelart/selectColor.css";


class SelectColor extends React.Component {
    colorsToSelect = ["red", "green", "yellow", "black", "blue", "purple", "orange", "white"]

    onSelectColor = (pixelRef) => {
        this.props.selectColor(pixelRef.current.style.backgroundColor);
    }

    allColorToSelect() {
        return (
            this.colorsToSelect.map(color => {
                return (
                    <Pixel 
                        style={{backgroundColor: color}} 
                        key={color}
                        onPixelClick={this.onSelectColor}
                    />
                )
            })
        )
    }

    render() {
        return (
            <div className="select-color grid">
                <div className="selected-color flex">
                    <div className="selected-color-text">Wybrany kolor</div>
                    <Pixel style={{backgroundColor: this.props.selectedColor}}/>
                </div>
                <div className="colors-to-select flex">
                    {this.allColorToSelect()}
                </div>
            </div>
        )
    }
}

SelectColor.propTypes = {
    selectedColor: PropTypes.string.isRequired,
    selectColor: PropTypes.func,
}

export default SelectColor;