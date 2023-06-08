import React from 'react'
import '../Styles/header.css'
import LogoYT from './Logo';
import Searchbar from '../Pages/Mgs/Components/Searchbar';
import BlocProfil from '../Pages/Mgs/Components/BlocProfil';

const Header = (props) => {
    return(
    <div className={props.classe}>
        <LogoYT className="logoType"/>
        <Searchbar className="search"/>
        <BlocProfil className="hdProfil"/>
    </div>
    )
    }
    export default Header;