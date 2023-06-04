import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import classes from './Head.module.css';
import image from '../assets/VK.jpg'
const Header = () => {
    return (
        <Fragment>
            <div className={classes.header}>
                <div className={classes.left}>
                    <img src={image} alt="" />
                    <h1 className={classes.logo}>Portfo<span>lio</span></h1>
                </div>
                <div className={classes.right}>
                    <li ><Link className={classes.link} to="/">Home</Link></li>
                    <li ><Link className={classes.link} to="/about">About</Link></li>
                    <li ><Link className={classes.link} to="/project">Project</Link></li>
                    <li ><Link className={classes.link} to="/contact">Contact</Link></li>

                </div>
            </div>
        </Fragment>
    )
}

export default Header;