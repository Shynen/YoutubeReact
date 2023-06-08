import React from 'react'
import '../../../Styles/infoVid.css'
import { BsPersonSquare} from "react-icons/bs";
import { infoVid,bouton,darkBtn } from '../../../lng/fr';
import { BsHandThumbsUp,BsHandThumbsDown,BsArrowBarDown,BsThreeDots } from 'react-icons/bs';
import { SlShareAlt} from 'react-icons/sl';
import Bouton from '../../../Components/Bouton';
import DarkBtn from '../../../Components/DarkBtn';
import DarkBtnS from '../../../Components/DarkBtnS';


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
                    <Bouton classBtn ={bouton.classe1}text={bouton.btnSub} />
                </div>
                <div className='packRight'>
                    <div className='packIcnBtn'><BsHandThumbsUp className='icnBtn'/>   
                        <DarkBtn text={darkBtn.nbLike} classBtn={darkBtn.classe1}/>
                        <BsHandThumbsDown className='icnBtnL'/>
                    </div>
                    <div className='packIcnBtn'><SlShareAlt className='icnBtn'/> 
                        <DarkBtnS classBtn={darkBtn.classe1}text={darkBtn.share}/>
                    </div>
                    <div className='packIcnBtn'><BsArrowBarDown className='icnBtn'/> 
                    <DarkBtnS classBtn={darkBtn.classe1}text={darkBtn.dl}/>
                    </div>
                    <div className='packIcnBtn'>
                        <BsThreeDots className='icnBtnL'/> 
                    </div>

                </div>
            </div>
        </div>
    )
    }
    export default InfoVid;