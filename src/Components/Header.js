import React from 'react'
import '../Styles/header.css'
import LogoYT from './Logo';
import Searchbar from '../Pages/Mgs/Components/Searchbar';
import BlocProfil from '../Pages/Mgs/Components/BlocProfil';
import {Link} from "react-router-dom";

const Header = (props) => {
    return(
    <div className={props.classe}>
        <Link to="/"><LogoYT className="logoType"/></Link>
        <Searchbar className="search"/>
        <BlocProfil className="hdProfil"/>
    </div>
    )
    }
    export default Header;