import React, {useState} from 'react';
import style from './Header.module.css'
import gitHub from '../../assets/icons/GitHubLogo.png'

function Header(props) {

    let [searchBar, setSearchBar] = useState('');
    const onSearchBarChange = (e) => {
        setSearchBar(e.currentTarget.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.isSearched(true)
        props.SetSearchValue(searchBar)
        props.getUserProfileInfo(searchBar, props.currentPage, props.perPage)

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

