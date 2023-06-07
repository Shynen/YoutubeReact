import React from 'react'
import '../../../Styles/vidProp.css'
import { vidText } from '../../../lng/fr';
const VidProp = (props) => {
    return(
               <div className='videoPropose'>
                <img src={props.elsrc}/>
                    <div className='englobeText'>
                        <div className='textVidProp1'>
                            <span className='titreVid'>
                                {props.titreVid}
                            </span>
                            <span className='autorVid'>
                                {vidText.autVid}
                            </span>
                        </div>
                        <div className='textVidProp2'>
                            <span className='vuesVid'>
                                {props.nbVues}
                            </span>
                            <span className='point'> {props.dot}</span>
                            <span className='datevid'>
                                {props.date}
                            </span>
                        </div>
                    </div>
                </div>
    )
}

export default VidProp;