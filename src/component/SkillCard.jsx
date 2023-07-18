import React from "react";
import style from "./style/SkillCard.module.css"


function SkillCard(props) {
    console.log(props.arr)
    return (
        <div className={style.skill}>
            <div className={style.content}>
            <p>{props.arr}</p>
            </div>
        </div>
    )
}
export default SkillCard;