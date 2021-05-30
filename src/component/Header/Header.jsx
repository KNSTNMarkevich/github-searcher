import React, {useState} from 'react';
import style from './Header.module.css'
import gitHub from '../../assets/icons/GitHubLogo.png'
import { useHistory, withRouter, Link } from "react-router-dom";


function Header(props) {
    let history = useHistory();

    let [searchBar, setSearchBar] = useState('');
    let [username, setUsername] = useState('');

    const onSearchBarChange = (e) => {
        setSearchBar(e.currentTarget.value)
        setUsername(e.currentTarget.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.isSearched(true)
        history.push(`/users/${username}`)
        props.SetSearchValue(username)
        props.getUserProfileInfo(username)
        setSearchBar('')
    }



    return (
        <div className={style.headerWrapper}>
            <div className={style.headerContent}>
                <img className={style.headerLogo} src={gitHub}/>
                <form onSubmit={handleSubmit}>
                    <input className={style.searchBar}
                           placeholder="Enter GitHub username"
                           type="text"  value={searchBar}
                           onChange={onSearchBarChange}/>
                </form>
            </div>
        </div>
    );
}

export default Header;

