import React, {useState} from 'react';
import style from './Header.module.css'
import gitHub from '../../assets/icons/GitHubLogo.png'
import {Link, NavLink, Redirect} from "react-router-dom";

function Header(props) {

    let [searchBar, setSearchBar] = useState('');
    const onSearchBarChange = (e) => {
        setSearchBar(e.currentTarget.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.isSearched(true) //может поменять на наличие буков
        props.SetSearchValue(searchBar)
        props.getUserProfileInfo(searchBar)
    }



    return (
        <div className={style.headerWrapper}>
            <div className={style.headerContent}>
                <img className={style.headerLogo} src={gitHub}/>
                <form onSubmit={handleSubmit}>
                    <input className={style.searchBar}
                           placeholder="Найти пользователя"
                           type="text"  value={searchBar}
                           onChange={onSearchBarChange}/>
                </form>
            </div>
        </div>
    );
}

export default Header;

