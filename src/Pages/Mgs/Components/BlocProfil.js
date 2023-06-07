import React from 'react'
import '../../../Styles/blocProfil.css'
import { BsBell} from "react-icons/bs";
import { BsCameraVideo} from "react-icons/bs";
import { BsPersonSquare} from "react-icons/bs";

const BlocProfil = () => {
    return(
            <div className='englobeIcons'>
                <BsBell className='iconeHeader'/>
                <BsCameraVideo className='iconeHeader'/>
                <BsPersonSquare className='iconeHeader'/>

            </div>
    )
}

export default BlocProfil;