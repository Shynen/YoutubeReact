import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import '../Style/Nav.css'
import {ImYoutube2} from "react-icons/im";
import { FiHome,FiZap,FiCheck,FiPlay,FiRefreshCcw,FiPlayCircle,FiRotateCw,FiSmile,FiArrowUpRight,FiMusic,FiFilm,FiRss,FiActivity,FiTv,FiDribbble,FiSettings,FiFlag,FiHelpCircle,FiEdit  } from "react-icons/fi"
import {Bs1Circle,Bs2Circle,Bs3Circle,Bs4Circle,Bs5Circle} from "react-icons/bs"
import { GrYoutube} from "react-icons/gr";
class Navbar extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu>
        <ImYoutube2 className='logomenu'/>
        <a id="home" className="menu-item" href="/">
          <FiHome className='icone'/>
          Accueil
        </a>
        <a id="short" className="menu-item" href="/about">
          <FiZap className='icone'/>
          Shorts
        </a>
        <a id="subscribe" className="menu-item" href="/contact">
          <FiCheck className='icone'/>
          Abonnements
        </a>
        <hr className='separation'></hr>
        <a id="library" className="menu-item" href="/contact">
          <FiPlay className='icone'/>
          Bibliothèque
        </a>
        <a id="history" className="menu-item" href="/contact">
          <FiRefreshCcw className='icone'/>
          Historique
        </a>
        <a id="urvids" className="menu-item" href="/contact">
          <FiPlayCircle className='icone'/>
          Vos vidéos
        </a>
        <a id="later" className="menu-item" href="/contact">
          <FiRotateCw className='icone'/>
          À regarder plus...
        </a>
        <a id="vidlikes" className="menu-item" href="/contact">
          <FiSmile className='icone'/>
          Vidéos "J'aime"
        </a>
        <hr className='separation'></hr>
        <p id="topCat" className="menu-item-top">Abonnements</p>
        <a id="contact" className="menu-item" href="/contact">
          <Bs1Circle className='icone'/>
          Abonnement 1
        </a>
        <a id="contact" className="menu-item" href="/contact">
          <Bs2Circle className='icone'/>
          Abonnement 2
        </a>
        <a id="contact" className="menu-item" href="/contact">
          <Bs3Circle className='icone'/>
          Abonnement 3
        </a>
        <a id="contact" className="menu-item" href="/contact">
          <Bs4Circle className='icone'/>
          Abonnement 4
        </a>
        <a id="contact" className="menu-item" href="/contact">
          <Bs5Circle className='icone'/>
          Abonnement 5
        </a>
        <hr className='separation'></hr>
        <p id="topCat" className="menu-item-top">Explorer</p>
        <a id="tendances" className="menu-item" href="/contact">
          <FiArrowUpRight className='icone'/>
          Tendances
          </a>
        <a id="music" className="menu-item" href="/contact">
          <FiMusic className='icone'/>
          Musique
          </a>
        <a id="film" className="menu-item" href="/contact">
          <FiFilm className='icone'/>
          Films et séries TV
          </a>
        <a id="direct" className="menu-item" href="/contact">
          <FiRss className='icone'/>
          Direct
          </a>
        <a id="jv" className="menu-item" href="/contact">
          <FiActivity className='icone'/>
          Jeux vidéo
          </a>
        <a id="news" className="menu-item" href="/contact">
          <FiTv className='icone'/>
          Actualités
          </a>
        <a id="sport" className="menu-item" href="/contact">
          <FiDribbble className='icone'/>
          Sport
          </a>
        <hr className='separation'></hr>
        <p id="topCat" className="menu-item-top">Autres contenus Youtube</p>
        <a id="premium" className="menu-item" href="/contact">
        <GrYoutube className='icone'/>
          Youtube Premium
          </a>
        <a id="studio" className="menu-item" href="/contact">
        <GrYoutube className='icone'/>
          Youtube Studio
          </a>
        <a id="ytmusic" className="menu-item" href="/contact">
        <GrYoutube className='icone'/>
          Youtube Music
          </a>
        <a id="kids" className="menu-item" href="/contact">
        <GrYoutube className='icone'/>
          Youtube Kids
          </a>
        <hr className='separation'></hr>
        <a id="settings" className="menu-item" href="/contact">
          <FiSettings className='icone'/>
          Paramètres
          </a>
        <a id="reports" className="menu-item" href="/contact">
          <FiFlag className='icone'/>
          Historique des...
          </a>
        <a id="help" className="menu-item" href="/contact">
          <FiHelpCircle className='icone'/>
          Aide
          </a>
        <a id="comment" className="menu-item" href="/contact">
          <FiEdit className='icone'/>
          Envoyer des ...
          </a>
        <hr className='separation'></hr>
        <p id="creator" className="menu-item">© 2023 Morgan.F LLC </p>
      </Menu>
    );
  }
}
export default Navbar;
