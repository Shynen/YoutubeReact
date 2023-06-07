import React from 'react'
import '../../Styles/darkBtn.css';

const DarkBtn = (props) => {
    return(
        <div className="boutonGlob">
            <input type="button" className='btnDarkU' value={props.text}>
            </input>
        </div>
    )
}
    export default DarkBtn;