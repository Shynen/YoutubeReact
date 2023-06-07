import React from 'react'
import '../../../Styles/blocVideo.css'
import NavRight from './NavRight';
import InfoVid from './InfoVid';

const blocVideo = () => {
    return(
            <div className='englobeVideo'>
               <div className='video'>
               <iframe width="1280" height="720" src="https://www.youtube.com/embed/C3vZvPyBnHw" title="Metal Gear Solid 3 Remake Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <InfoVid/>
                </div> 
                 
                <NavRight className="menuDroite"/>
              
            </div>
    )
}

export default blocVideo;