import React from 'react'
import '../Styles/darkBtnS.css';

const DarkBtnS = (props) => {
    return(
        <div className="boutonGlob">
            {props.iconName}
            <input type="button" className={props.classBtn} value={props.text}>
            </input>
        </div>
    )
}
    export default DarkBtnS;