import React from 'react'
import '../Styles/bouton.css';

const Bouton = (props) => {
    return(
        <div className="boutonGlob">
            <input type="button" className={props.classBtn} value={props.text}>
            </input>
        </div>
    )
}
    export default Bouton;