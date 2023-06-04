import React, { Fragment } from 'react'
import Header from '../Header/Header';
import classes from './Pro.module.css'
import { ProjectList } from './Projectlist';
import Footer from '../Footer/Footer';
const Project = () => {
    return (
        <Fragment>
            <Header />
            <h1 className={classes.title}>Projects</h1>
            <div className={classes["project-list"]}>
                <div className={classes.project}>
                    <img src={ProjectList[0].image} alt="" />
                    <h1><a href="https://vk-realestate.onrender.com/" target='blank'>{ProjectList[0].name}</a></h1>
                </div>
                <div className={classes.project}>
                    <img src={ProjectList[1].image} alt="" />
                    <h1><a href="https://vk-snapshot.netlify.app/" target='blank'>{ProjectList[1].name}</a></h1>
                </div>
                <div className={classes.project}>
                    <img src={ProjectList[2].image} alt="" />
                    <h1><a href="https://vkchauhangoldy-instaclone.onrender.com/" target='blank'>{ProjectList[2].name}</a></h1>
                </div>
                <div className={classes.project}>
                    <img src={ProjectList[3].image} alt="" />
                    <h1><a href="https://vk-imageslider.netlify.app/" target='blank'>{ProjectList[3].name}</a></h1>
                </div>
            </div>
            <div className={classes.btn}>
                <button>Load more</button>
            </div>
            <Footer />
        </Fragment>
    )
}

export default Project;
