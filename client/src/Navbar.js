import React, { Component } from 'react';
import iconOverview from './images/icon-overview.svg';
import iconMap from './images/icon-map.svg';
import iconAddressBook from './images/icon-address-book.svg';
import iconHtml from './images/icon-html.svg'

class Navbar extends Component {
    render() {
        return (
    <div className="navbar">
    <ul>
        <li>
            <a href="/">
            <img src={iconOverview} alt=""></img>
            Overview
            </a>
        </li>
        <li>
        <a href="/mail-analytics">
        <img src={iconMap} alt=""></img>
        Mail Analytics
        </a>
        </li>
        <li>
            <a href="/address-book">
            <img src={iconAddressBook} alt=""></img>
            Address Book
            </a>
        </li>
        <li>
            <a href="html-templates">
            <img src={iconHtml} alt=""></img>
            HTML Templates
            </a>
        </li>  
        </ul>
    </div>
        );
    }
}

export default Navbar;

