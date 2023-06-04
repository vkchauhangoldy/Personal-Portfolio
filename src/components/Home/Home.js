import React, { Fragment } from 'react';
import classes from './Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import Skill from '../Skills/Skill';
import Header from '../Header/Header';
const Home = () => {
    return (
        <Fragment>
            <Header />
            <div className={classes.container}>
                <div className={classes.main}>
                    <p className={classes.para}>Hi, my name is</p>
                    <h1 className={classes.name}>Vinay Kumar Chauhan</h1>
                    <p className={classes.para}>A <span>Full Stack Developer</span> with a passion for learning and creating.</p>
                    <div>
                        <p className={classes.social}>
                            <li>
                                <Link className={classes.link} to='https://www.linkedin.com/in/vinay-kumar-chauhan-543203226/' target='blank'><FontAwesomeIcon icon={faLinkedin} /> </Link>
                            </li>
                            <li >
                                <Link className={classes.link} to='https://github.com/vkchauhangoldy' target='blank'><FontAwesomeIcon icon={faGithub} /></Link>
                            </li>
                            <li >
                                <Link className={classes.link} to='https://www.instagram.com/vk_chauhan_goldy/' target='blank'><FontAwesomeIcon icon={faInstagram} /></Link>
                            </li>
                            <li >
                                <Link className={classes.link} to='https://twitter.com/vk_goldy' target='blank'><FontAwesomeIcon icon={faTwitter} /></Link>
                            </li>
                        </p>
                        <a className={classes.button} href="https://drive.google.com/file/d/1pdiK51wW0nrxoDe-iYCUnzyM6kzLVnt6/view?usp=drive_link" target='blank'>Download CV</a>
                    </div>
                </div>
            </div>
            <Skill />
        </Fragment>
    )
}

export default Home;
