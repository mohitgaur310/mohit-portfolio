import React from "react";
import style from "./style/Projects.module.css"

function Projects() {
    return(
        <div className={style.mainDiv}>
            {/*<img src={require("../images/1.jpg")} alt="Your Image" className={style.image} />*/}
            <div className={style.topDiv}>
                <h1 className={style.project}>PROJECTS</h1>
                <div className={style.brTag}></div>
                <h5>Here you will find some of the projects that I created.
                    <br/>
                   These projects demonstrate my expertise with practical examples of some of my work, including links to code repositories and live demos. They showcase my ability to tackle intricate challenges.
                </h5>

            </div>
            <div className={style.bottomDiv}>
                <div className={style.leftDiv} >
                    <img src={require("../images/mac21.png")} alt="Your Image" className={style.image} />
                </div>
                <div className={style.rightDiv}>
                    <h2 className={style.project} >Sorting Visualizer </h2>
                    <div className={style.paraDiv} >
                    <p >This is a project to let everyone understand how sorting algorithms work. </p>
                    </div>
                <div className={style.butDiv}>    
                <a href="https://mohitgaur310.github.io/Sorting-Visualizer/" target="_blank"><button type="button" className={style.proBut1} >PROJECT</button></a>
                <a href="https://github.com/mohitgaur310/Sorting-Visualizer" target="_blank"><button type="button" className={style.proBut2}>CODE</button></a>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Projects;