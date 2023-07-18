import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import style from "./style/sidebar.module.css"
function Sidebar() {
    return(
        <div className={style.menuBar}>
            <div className={style.social}>
                <a className={style.aTag} href="https://www.linkedin.com/in/mohit-gaur-3418a1202" target="_blank"><i className="fa-brands fa-linkedin-in fa-2xl"></i>   </a>
            </div>
            <div className={style.social} >
                <a className={style.aTag} href="https://twitter.com/MohitGa60376935" ><i className="fa-brands fa-twitter fa-2xl"></i> </a>
            </div>
            <div className={style.social} >
                <a className={style.aTag} href="https://github.com/mohitgaur310" ><i className="fa-brands fa-github fa-2xl"></i> </a>
            </div>
            <div className={style.social} >
                <a className={style.aTag} ><i className="fa-brands fa-youtube fa-2xl"></i> </a>
            </div>
            <div className={style.social} >
                <a className={style.aTag} ><i className="fa-brands fa-instagram fa-2xl"></i> </a>
            </div>



        </div>
    )
};

export default Sidebar;