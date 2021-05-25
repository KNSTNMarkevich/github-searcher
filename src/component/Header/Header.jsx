import React, {useState} from 'react';
import style from './Header.module.css'
import gitHub from '../../assets/icons/GitHubLogo.png'
import {getUserProfileInfo} from "../../redux/users-reducer";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

function Header(props) {

    let [searchBar, setSearchBar] = useState('');
    const onSearchBarChange = (e) => {
        setSearchBar(e.currentTarget.value)

    }

    const handleSubmit = (event) => {

        event.preventDefault();
        props.getUserProfileInfo(searchBar)
    }


    if(props.user){
        return <Redirect to={`/users/${searchBar}`}/>
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

const mapStateToProps = (state) => ({
    user: state.users.user
})
export default connect(mapStateToProps,{getUserProfileInfo})(Header);
