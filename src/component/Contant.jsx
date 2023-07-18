import '../App.css'
import React from 'react'
import style from './style/Contact.module.css'

function Contant() {
    return (
        <div className={style.mainDiv}>
        <div className={style.contact} >
            <div className={style.main} >
                <div className={style.social}>
                    <h4>SOCIAL</h4>
                    <a href="mailto:mohitgaur310@gmail.com" target='_blank'><img src={require('../icon/icons8-gmail-250.png')} alt='linkedin' style={{ width: "40px", marginRight: "0.7vw" }} /></a>
                    <a href="www.linkedin.com/in/mohit-gaur-3418a1202" target='_blank'><img src={require('../icon/icons8-linkedin-240.png')} alt='linkedin' style={{ width: "40px", marginRight: "0.7vw" }} /></a>
                    <a href="https://github.com/mohitgaur310" target='_blank'><img src={require('../icon/icons8-github-240.png')} alt='github' style={{ width: "40px", marginRight: "0.7vw" }} /></a>
                    <a href="https://www.instagram.com/mohit_gaur_1/" target='_blank'><img src={require('../icon/icons8-instagram-250.png')} alt='github' style={{ width: "35px", marginRight: "0.7vw" }} /></a>
                </div>
                <div className={style.bottomInfo}>
                    <h4 >Mohit Gaur</h4>
                    <p >A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product.</p>
                </div>
                <br />
                <br />
                <hr className={style.hrtag}/>
                <p> &copy; Copyright 2023. Made by <a href="">Mohit Gaur</a></p>
            </div>
        </div>
        </div>
    );
};

export default Contant;