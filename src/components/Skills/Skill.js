import React, { Fragment } from 'react'

import classes from './Skill.module.css'
import Footer from '../Footer/Footer';
const Skill = () => {
    return (
        <Fragment className={classes.contanier}>
            <div className={classes.header}>Skills</div>
            <div className={classes.main}>
                <div className={classes.content}>
                    <h1>Front-End:</h1>
                    <p>HTML, CSS, Bootsrap, Javascript, ReactJS</p>
                </div>
                <div className={classes.content}>
                    <h1>Back-End:</h1>
                    <p>NodeJS, ExpressJS, MongoDB</p>
                </div>
                <div className={classes.content}>
                    <h1>Languages:</h1>
                    <p>Javascript, Python</p>
                </div>
            </div>
            <div className={classes.footer}>
                <Footer />
            </div>
        </Fragment>
    )
}

export default Skill;
