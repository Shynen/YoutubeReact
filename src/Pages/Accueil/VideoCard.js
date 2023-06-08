import React from 'react'
import '../../Styles/videoCard.css'
const VideoCard = (props) => {
    return(
               <div className='videoProp'>
                <img src={props.elsrc}/>
                    <div className='englobeText'>
                        <div className='textVidProp1'>
                            <span className='titreVid'>
                                {props.titreVid}
                            </span>
                            <span className='autorVid'>
                                {props.autVid}
                            </span>
                        </div>
                        <div className='textVidProp2'>
                            <span className='vuesVid'>
                                {props.nbVues}
                            </span>
                            <span className='datevid'>
                                {props.date}
                            </span>
                        </div>
                    </div>
                </div>
    )
}
export default VideoCard;