import React, {useState} from 'react';
import style from './Header.module.css'
import gitHub from '../../assets/icons/GitHubLogo.png'

function Header() {

    let [searchBar, setSearchBar] = useState('');

    const onSearchBarChange = (e) => {
        setSearchBar(e.currentTarget.value)
    }


    return (
        <div className={style.headerWrapper}>
            <div className={style.headerContent}>
                <img className={style.headerLogo} src={gitHub}/>
                <input className={style.searchBar} type="search" value={searchBar} onChange={onSearchBarChange}/>
            </div>

        </div>

    );
}

export default Header;