import React from 'react'
import style from './InitialPage.module.css'
import SearchLarge from "../../assets/icons/SearchLarge.png";
import {NavLink, Redirect} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import {getUserProfileInfo} from "../../redux/users-reducer";
import {withRouter} from "react-router";
import {isSearched} from "../../redux/search-reducer";

const InitialPage = React.memo(function (props) {

    if (props.searchValue) {
        console.log(props.searchValue)
        props.isSearched(false)
        return <Redirect to={`/users/${props.searchValue}/`}/>
    }

    props.isSearched(false)

    return (
        <div className={style.initialWrapper}>
            <img src={SearchLarge}/>
            <div className={style.contentText}>
                Start with searching
                a GitHub user
            </div>
        </div>

    );
})

const mapStateToProps = (state) => ({
    user: state.users.user,
    searchValue: state.search.searchValue,
    isSearchedState: state.search.isSearchedState
})


export default compose(
    connect(mapStateToProps, {getUserProfileInfo, isSearched}),
    withRouter,

)(InitialPage)
