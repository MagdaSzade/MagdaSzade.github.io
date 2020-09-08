import React from 'react';
import PropTypes from 'prop-types';

import { createWhiteBoard } from './key';

import Button from './Button';

import '../../../styles/pixelart/selectSize.css'

class SelectSize extends React.Component {
    state = {
        height: this.props.height,
        width: this.props.width
    }

    componentDidMount() {
        console.log(this.props);
    }

    onHeightChange = event => {
        if(event.target.value && !event.target.value.includes('e')) {
            try {
                this.setState({ height: parseInt(event.target.value) });
            } catch (err) {
            }
        } else {
            this.setState({ height: "" });
        }
    };

    onWidthChange = event => {
        if(event.target.value && !event.target.value.includes('e')) {
            try {
                this.setState({ width: parseInt(event.target.value) });
            } catch (err) {
            }
        } else {
            this.setState({ width: "" });
        }
    };

    onSizeChange = event => {
        event.preventDefault();
        if (this.state.width <= 20 && this.state.width > 0 && this.state.height <= 20 && this.state.height > 0 ) {
            this.props.selectSize({width: this.state.width, height: this.state.height });
        }
    }

    onClear = () => {
        const clearedPixels = createWhiteBoard(this.state.width, this.state.height);
        this.props.clearCanva(clearedPixels);
    }

    render() {
        return(
            <div className="select-size">
                <form onSubmit={this.onSizeChange}>
                    <div className="grid inputs">
                        <label htmlFor="height">Wysokość</label>
                        <input
                            type="number"
                            id="height"
                            name="height"
                            min="1"
                            max="20"
                            value={this.state.height}
                            onChange={this.onHeightChange}
                        />
                        <Button onButtonClick={this.onSizeChange} text="zmień"/>
                        <label htmlFor="width">Szerokość</label>
                        <input
                            type="number"
                            id="width"
                            name="width"
                            min="1"
                            max="20"
                            value={this.state.width}
                            onChange={this.onWidthChange}
                        />
                        <Button onButtonClick={this.onClear} text="wyczyść"/>
                    </div>
                </form>
                <div className="info">
                    wysokość i szerokość muszą mieścić się w zakresie 1-20
                </div>
            </div>
        )
    }
}

SelectSize.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    selectSize: PropTypes.func.isRequired,
    clearCanva: PropTypes.func.isRequired,
}
export default SelectSize;  