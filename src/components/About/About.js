import React, { Fragment } from 'react'
import Header from '../Header/Header';
import classes from './About.module.css'
import profile from '../assets/VK.jpg'
import Footer from '../Footer/Footer';
const About = () => {
    return (
        <Fragment>
            <Header />
            <h1 className={classes.heading}>About me</h1>
            <div className={classes.container}>
                <div className={classes["left-content"]}>
                    <img src={profile} alt="" />
                </div>
                <div className={classes["right-content"]}>
                    <h1 className={classes.tilte}>
                        I'm Vinay Kumar Chauhan and I am a <span>Full Stack Developer</span>
                    </h1>
                    <p className={classes.about}>
                        As I mentioned above that I am a Full Stack Developer. I have learnt web Technologies like Forntend ,Backend and Database. Apart from thses technologies I have good knowledge of Data Structures and Algorithms. I have completed my B.Tech in Electronics & Communication Engineering Branch in 2021 from VBS Purvanchal University Jaunpur,Uttar-Pradesh. Also I have done Diploma in Electronics Engineering in 2018 from Government Polytechnic Saharanpur, Uttar-Pradesh.
                    </p>
                    <a className={classes.button} href="https://drive.google.com/file/d/1ZucJN6PiIW60Uqqne79InpM1NOeiDMdd/view?usp=drive_link" target='blank'>Download CV</a>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default About;
