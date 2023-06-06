import React from 'react'
import '../Styles/Header.css'
import LogoYT from './Logo';
import Searchbar from './Searchbar';
import BlocProfil from './BlocProfil';

const Header = () => {
    return(
    <div className="Hd">
        <LogoYT className="logoType"/>
        <Searchbar className="search"/>
        <BlocProfil className="hdProfil"/>
    </div>
    )
    }
    export default Header;