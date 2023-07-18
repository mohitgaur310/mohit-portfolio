import React from "react";
import style from "./style/about.module.css"
import SkillCard from "./SkillCard";

function About() {
    const arr=["HTML","CSS","Javascript","React Js","GIT","Java",
        "Spring Boot","Github","Responsive Design","SQL","Typescript" ];
    return(
        <div className={style.mainDiv}>
            {/*<img src={require("../images/fondo-gris_626010-3.jpg")} alt="Your Image" className={style.image} />*/}
           <div className={style.topDiv}>
               <h1 className={style.about}>About Me</h1>
                <div className={style.brTag}></div>
               <h5>Here you find more information about me, what I do, and my
                current skills mostly in terms of programming and technology
               </h5>
           </div>
            <div className={style.bottomDiv} >
                <div className={style.knowMe}>
                    <h2 className={style.secondaryHead}> Get to know me!</h2>
                    <p>I'm a  <span className={style.impt}> Frontend Web Developer</span> building the front-end of websites and web applications that leads to the success of the overall product. Check out some of my work in the <span className={style.impt}> Projects </span> section.
                        <br />
                        <br />
                        Young, energetic and result oriented professional seeking a responsible and a career-oriented opportunity in an organization that could utilize my knowledge and ability in a competitive environment.                    <br />
                        <br />
                        I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
                    </p>
                    <button className={style.proBut}> Contact </button>
                </div>
                <div className={style.skills}>
                        <h2 className={style.secondaryHead} >My Skills</h2>

                    {arr.map((item, index) => (
                        <SkillCard key={index} arr={item} />

                    ))}

                </div>
            </div>
        </div>
    )
}
export default About;