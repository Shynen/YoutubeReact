import React from 'react'
import '../Styles/header.css'
import LogoYT from './Logo';
import Searchbar from '../Pages/Mgs/Components/Searchbar';
import BlocProfil from '../Pages/Mgs/Components/BlocProfil';
import {classe} from '../lng/fr';

const Header = () => {
    return(
    <div className={classe.couleurHd}>
        <LogoYT className="logoType"/>
        <Searchbar className="search"/>
        <BlocProfil className="hdProfil"/>
    </div>
    )
    }
    export default Header;