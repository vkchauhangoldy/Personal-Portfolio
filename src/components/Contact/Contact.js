import React, { Fragment, useState } from 'react'
import classes from './Cont.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import axios from 'axios';
const Contact = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [message, setMessage] = useState("")

    const submitHandler = async (e) => {
        e.preventDefault()
        const data = {
            Name: name,
            Email: email,
            Mobile: mobile,
            Message: message
        }
        await axios.post("https://sheet.best/api/sheets/535dfb88-81ee-418d-baaa-d0489ccfa400", data)
            .then((response) => {
                setName("")
                setEmail("")
                setMobile("")
                setMessage("")
            }).catch(e => {
                console.log(e);
            })
    }
    return (
        <Fragment>
            <Header />
            <div className={classes.header}> Contact me</div>
            <div className={classes.container}>
                <div className={classes.left}>
                    <div className={classes.details}>
                        <h1>Get in touch</h1>
                        <p>Kindly reach me out at following details.</p>
                    </div>
                    <div className={classes["details-controls"]}>
                        <div className={classes.logo}><FontAwesomeIcon icon={faUser} /></div>
                        <div className={classes.details}>
                            <h1>Name</h1>
                            <p>Vinay Kumar Chauhan</p>
                        </div>
                    </div>
                    <div className={classes["details-controls"]}>
                        <div className={classes.logo}><FontAwesomeIcon icon={faLocationDot} /></div>
                        <div className={classes.details}>
                            <h1>Address</h1>
                            <p>Bangalore, Karnataka</p>
                        </div>
                    </div>
                    <div className={classes["details-controls"]}>
                        <div className={classes.logo}><FontAwesomeIcon icon={faPhone} /></div>
                        <div className={classes.details}>
                            <h1>Mobile</h1>
                            <p>+91 - 8948499916</p>
                        </div>
                    </div>
                    <div className={classes["details-controls"]}>
                        <div className={classes.logo}><FontAwesomeIcon icon={faEnvelope} /></div>
                        <div className={classes.details}>
                            <h1>Email</h1>
                            <p>vkchauhangoldy@gmail.com</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={submitHandler} className={classes.form}>
                    <h1>Message me</h1>
                    <div className={classes["input-controls"]}>
                        <label htmlFor='name'>Name:</label>
                        <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <div className={classes["input-controls"]}>
                        <label htmlFor='name'>Email:</label>
                        <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div className={classes["input-controls"]}>
                        <label htmlFor='name'>Mobile:</label>
                        <input type="text" value={mobile} onChange={(e) => { setMobile(e.target.value) }} />
                    </div>
                    <div className={classes["input-controls"]}>
                        <label htmlFor='name'>Message:</label>
                        <textarea type="text" value={message} onChange={(e) => { setMessage(e.target.value) }} />
                    </div>
                    <div className={classes["action-controls"]}>
                        <button type='submit' className={classes.button}>Send</button>
                    </div>
                </form>
            </div>
            <Footer />
        </Fragment>
    )
}

export default Contact;
