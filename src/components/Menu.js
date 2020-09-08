import React from 'react';
import { Link } from "react-router-dom";
import { IoLogoGameControllerB } from 'react-icons/io';
import { AiOutlineMessage, AiOutlineInfoCircle } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi'

import "../styles/menu.css"

class Menu extends React.Component {
    state = {
        firstTime: true,
        isMenuOpen: false,
    }

    items = [
        { href: "/", icon: <AiOutlineInfoCircle /> },
        { href: "/games", icon: <IoLogoGameControllerB /> },
        { href: "/contact", icon: <AiOutlineMessage />},
    ]

    createMenu() {
        return this.items.map( (item , index) => {
            return (
                <li key={index} className={`item${index}`}>
                    <Link to={item.href}>
                        {item.icon}
                    </Link>
                </li>
            );
        });
    }

    onOpenMenu = () => {
        if (this.state.firstTime) {
            this.setState({ firstTime: false });
        }
        if (!this.state.isMenuOpen) {
            setTimeout(() => {
                if (this.state.isMenuOpen) {
                    this.setState({isMenuOpen: false})
                }
            }, 5000);
        }
        this.setState({ isMenuOpen: !this.state.isMenuOpen });

    }

    wrapperClassNames() {
        if (this.state.firstTime) {
            return "cn-wrapper"
        }
        return  this.state.isMenuOpen ? "cn-wrapper animation-open" : "cn-wrapper animation-close"
    }

    render() {
        return (
            <div className="menu">
                <button className="cn-button" onClick={this.onOpenMenu}><GiHamburgerMenu /></button>
                <div className={this.wrapperClassNames()}>
                   <ul>
                       {this.createMenu()}
                   </ul>
                </div>
            </div>

        )
    };
};

export default Menu;