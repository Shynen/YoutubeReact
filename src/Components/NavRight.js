import React from 'react'
import '../Styles/navRight.css'
import { vidText } from '../lng/fr';
import VidProp from './VidProp'
import vidprop1 from '../Img/vidprop1.jpg'
import vidprop2 from '../Img/vidprop2.jpg'
import vidprop3 from '../Img/vidprop3.jpg'
import vidprop4 from '../Img/vidprop4.jpg'
import vidprop5 from '../Img/vidprop5.jpg'
import vidprop6 from '../Img/vidprop6.jpg'
import vidprop7 from '../Img/vidprop7.jpg'
import vidprop8 from '../Img/vidprop8.jpg'

const NavRight = () => {
    return(
            <div className='englobe'>
                <VidProp className="imgNavRight" elsrc={vidprop1}titreVid={vidText.titreVid} nbVues={vidText.nbVues} date={vidText.date}/>

                <VidProp className="imgNavRight" elsrc={vidprop2}titreVid={vidText.titreVid2} nbVues={vidText.nbVues2}date={vidText.date2}/>

                <VidProp className="imgNavRight" elsrc={vidprop3}titreVid={vidText.titreVid3} nbVues={vidText.nbVues3}date={vidText.date3}/>

                <VidProp className="imgNavRight" elsrc={vidprop4}titreVid={vidText.titreVid4} nbVues={vidText.nbVues4}date={vidText.date4}/>

                <VidProp className="imgNavRight" elsrc={vidprop5}titreVid={vidText.titreVid5} nbVues={vidText.nbVues5}date={vidText.date5}/>

                <VidProp className="imgNavRight" elsrc={vidprop6}titreVid={vidText.titreVid6} nbVues={vidText.nbVues6}date={vidText.date6}/>

                <VidProp className="imgNavRight" elsrc={vidprop7}titreVid={vidText.titreVid7} nbVues={vidText.nbVues7}date={vidText.date7}/>
                
                <VidProp className="imgNavRight" elsrc={vidprop8}titreVid={vidText.titreVid8} nbVues={vidText.nbVues8}date={vidText.date8}/>
            </div>
    )
}

export default NavRight;