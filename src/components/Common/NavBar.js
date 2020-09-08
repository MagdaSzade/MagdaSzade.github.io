import React from 'react';

import { GiHamburgerMenu } from 'react-icons/gi'
import '../../styles/navbar.css';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.navbarRef = React.createRef();
        this.hamburgerRef = React.createRef();
    }

    state = {
        width: 0,
        buttonsFront: [],
        buttonsSide: [],
        isSideBar: false,
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    componentDidUpdate() {
        let amountOfButtonsFront = 0;
        if (this.props.buttons.length <= this.state.width/110) {
            if (this.state.buttonsFront.length !== this.props.buttons.length) {
                this.setState({ buttonsFront: this.props.buttons, buttonsSide: [] });
            }
        } else {
            amountOfButtonsFront = Math.floor((this.state.width - 32)/110)
            if (this.state.buttonsFront.length !== amountOfButtonsFront) {
                const buttonsToFront = [];
                const buttonstoSide = [];
                for (let i = 0; i < amountOfButtonsFront; i++) {
                    buttonsToFront.push({...this.props.buttons[i]});
                }
                for (let i = amountOfButtonsFront; i <this.props.buttons.length; i++) {
                    buttonstoSide.push({...this.props.buttons[i], index: i });
                }
                this.setState({ buttonsFront: buttonsToFront, buttonsSide: buttonstoSide});
            }
        }
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    updateDimensions() {
        try {
            if (this.navbarRef.current.clientWidth > this.state.width + 10 || this.navbarRef.current.clientWidth < this.state.width - 10) {
                this.setState({ width: this.navbarRef.current.clientWidth})
            } 
        } catch(err) {
        }
    }

    createButtonsFront() {
        return this.state.buttonsFront.map((button, index) => {
            return <div
                className="button"
                key={button.text} 
                type="button"
                id={index} 
                onClick = {() => {this.props.onButtonClick(index); this.setState({ isSideBar: false })}}>{button.text}</div>
        })
    }

    createButtonsSide() {
        return this.state.buttonsSide.map((button) => {
            return <div
                className="button"
                key={button.text} 
                type="button"
                id={button.index} 
                onClick = {() => {
                        this.props.onButtonClick(button.index);
                        this.setState({ isSideBar: false })}}>{button.text}</div>
        })
    }

    determineStyle() {
        return (this.state.buttonsSide.length > 0) ? `${110*this.state.buttonsFront.length}px 2.1rem` : "1fr"
    }

    createHamburgerMenu() {
        if (this.state.buttonsSide.length > 0 && !this.state.isSideBar) {
            return (
                <div className="hamburger-menu" onClick={() => this.setState({ isSideBar: true })}>   
                    <GiHamburgerMenu />
                </div>
            )
        } else if (this.state.buttonsSide.length > 0) {
            return (
                <div className="hamburger-menu">
                    <div className="svg-center" onClick={() => this.setState({ isSideBar: false })}> 
                        <GiHamburgerMenu />
                    </div>
                    <div className="buttons-side">
                        {this.createButtonsSide()}
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="nav-bar-conteiner" ref={this.navbarRef}>
                <div 
                    className="nav-bar" 
                    style={{gridTemplateColumns: this.determineStyle()}}
                >
                    <div className="buttons-front"
                        style={{gridTemplateColumns: `repeat(${this.state.buttonsFront.length}, 110px)`}}>    
                        {this.createButtonsFront()}
                    </div>
                    {this.createHamburgerMenu()}
                </div>
            </div>
        )
    }  
}

export default NavBar;

