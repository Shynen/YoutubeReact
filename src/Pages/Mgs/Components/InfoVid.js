import React from 'react'
import '../../../Styles/infoVid.css'
import { BsPersonSquare} from "react-icons/bs";
import { infoVid,bouton,darkBtn } from '../../../lng/fr';
import Bouton from '../../../Components/Bouton';
import DarkBtn from '../../../Components/DarkBtn';


const InfoVid = () => {
    return(
        <div className="infoVidGlobal">
            <span className='videoTitle'>{infoVid.titreVideo}</span>
            <div className='leftPlusRight'>
                <div className='packLeft'>
                    <BsPersonSquare className='iconAutor'/>
                    <div className='infoAutor'>
                        <span className='autorVideo'>{infoVid.autorVideo}</span>
                        <span className='autorSub'>{infoVid.autorSub}</span>
                    </div>
                    <Bouton text={bouton.btnSub}/>
                </div>
                <div className='packRight'>
                    <DarkBtn text={darkBtn.nbLike}/>
                    <DarkBtn/>
                    <DarkBtn text={darkBtn.share}/>
                    <DarkBtn text={darkBtn.dl}/>
                    <DarkBtn text={darkBtn.tripled}/>
                </div>
            </div>
        </div>
    )
    }
    export default InfoVid;