import React from "react";
import style from "./style/home.module.css"
import Sidebar from "./sidebar";
function Home() {
    return(
        <div>
        <div className={style.name} >

            <img src={require("../images/white-abstract.png")} alt="Your Image" className={style.image} />
            <div className={style.gaur}>
                <h1 className={style.mainTag}>Hey, I'm MOHIT GAUR</h1>


                    <h5 className={style.info}>A frontend focused web developer building the frontend
                       of websites and web. Applications that leads to the success of
                        overall product.
                </h5>
                <button className={style.proBut} onClick={() => window.scrollTo(0, 1690)} > Projects </button>
                <div className={style.scrollDowns}>
                    <div className={style.mousey}>
                        <div className={style.scroller}></div>
                    </div>
                </div>

            </div>
        </div>
    < Sidebar />
        </div>
    );
}
export default Home;