import React from "react";
import style from "./style/header.module.css"
import myPic from "../images/MyPic.png"
import "../App.css"

function Header(){
    return (
        <div className={style.headDiv} >
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">


                <button id="nameButton" className={"navbar-brand " + style.tittleHead}

                >Mohit Gaur</button>
                {/* </div> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        onClick={() => window.scrollTo(0, 0)} aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className={"collapse navbar-collapse " +style.menuDiv}
                    id="navbarNav">
                    <ul className="navbar-nav ms-auto">

                        <li className={"nav-item"+style.navLI}>
                            <button className={"nav-link "+style.menuItems} onClick={() => window.scrollTo(0, 0)} aria-current="page" >Home</button>
                        </li>

                        <li className={"nav-item"+style.navLI}>
                            <button className={"nav-link " + style.menuItems} onClick={() => window.scrollTo(0, 750)} >About</button>
                        </li>

                        <li className={"nav-item"+style.navLI}>
                            <button className={"nav-link "+style.menuItems} onClick={() => window.scrollTo(0, 1690)} >Project</button>
                        </li>

                        <li className={"nav-item"+style.navLI}>
                            <button className={"nav-link "+style.menuItems} onClick={() => window.scrollTo(0, 2500)}  >Contact</button>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </div>)
}

export default Header;