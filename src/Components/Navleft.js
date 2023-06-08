import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import '../Styles/navleft.css'
import { menu,text} from '../lng/fr';
import {ImYoutube2} from "react-icons/im";
import { FiHome,FiZap,FiCheck,FiPlay,FiRefreshCcw,FiPlayCircle,FiRotateCw,FiSmile,FiArrowUpRight,FiMusic,FiFilm,FiRss,FiActivity,FiTv,FiDribbble,} from "react-icons/fi"
import {Bs1Circle,Bs2Circle,Bs3Circle,Bs4Circle,Bs5Circle} from "react-icons/bs"
import {Link} from "react-router-dom";

function Navleft (props) { 

    return (
      <Menu className={props.couleur} >
        <ImYoutube2 className='logomenu'/>
        <Link to="/" id="home" className="menu-item">
          <FiHome className='icone'/>
          {menu.home}
        </Link>
        <a id="short" className="menu-item" href="/about">
          <FiZap className='icone'/>
          {menu.short}
        </a>
        <a id="subscribe" className="menu-item" href="/contact">
          <FiCheck className='icone'/>
          {menu.sub}
        </a>
        <hr className='separation'></hr>
        <a id="library" className="menu-item" href="/contact">
          <FiPlay className='icone'/>
          {menu.lib}
        </a>
        <a id="history" className="menu-item" href="/contact">
          <FiRefreshCcw className='icone'/>
          {menu.hist}
        </a>
        <Link to="/page"  id="urvids" className="menu-item" href="/contact">
          <FiPlayCircle className='icone'/>
          {menu.uvid}
          </Link>
        <a id="later" className="menu-item" href="/contact">
          <FiRotateCw className='icone'/>
          {menu.vid}
        </a>
        <a id="vidlikes" className="menu-item" href="/contact">
          <FiSmile className='icone'/>
          {menu.like}
        </a>
        <hr className='separation'></hr>
        <p id="topCat" className="menu-item-top">{text.nav1}</p>
        <a id="contact" className="menu-item" href="/contact">
          <Bs1Circle className='icone'/>
          {menu.abo1}
        </a>
        <a id="contact" className="menu-item" href="/contact">
          <Bs2Circle className='icone'/>
          {menu.abo2}
        </a>
        <a id="contact" className="menu-item" href="/contact">
          <Bs3Circle className='icone'/>
          {menu.abo3}
        </a>
        <a id="contact" className="menu-item" href="/contact">
          <Bs4Circle className='icone'/>
          {menu.abo4}
        </a>
        <a id="contact" className="menu-item" href="/contact">
          <Bs5Circle className='icone'/>
          {menu.abo5}
        </a>
        <hr className='separation'></hr>
        <p id="topCat" className="menu-item-top">{text.nav2}</p>
        <a id="tendances" className="menu-item" href="/contact">
          <FiArrowUpRight className='icone'/>
          {menu.trend}
          </a>
        <a id="music" className="menu-item" href="/contact">
          <FiMusic className='icone'/>
          {menu.mus}
          </a>
        <a id="film" className="menu-item" href="/contact">
          <FiFilm className='icone'/>
          {menu.film}
          </a>
        <a id="direct" className="menu-item" href="/contact">
          <FiRss className='icone'/>
          {menu.live}
          </a>
        <a id="jv" className="menu-item" href="/contact">
          <FiActivity className='icone'/>
          {menu.jv}
          </a>
        <a id="news" className="menu-item" href="/contact">
          <FiTv className='icone'/>
          {menu.actu}
          </a>
        <a id="sport" className="menu-item" href="/contact">
          <FiDribbble className='icone'/>
          {menu.sp}
          </a>
        <hr className='separation'></hr>
        <p id="creator" className="menu-item">© 2023 Morgan.F LLC </p>
      </Menu>
    );
  }
export default Navleft;
