import style from './InitialPage.module.css'
import SearchLarge from "../../assets/icons/SearchLarge.png";
import {Redirect} from "react-router-dom";
import React, {useEffect} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {getUserProfileInfo} from "../../redux/users-reducer";
import {withRouter} from "react-router";
import {isSearched} from "../../redux/search-reducer";

function InitialPage(props) {

    if(props.isSearchedState){
        return <Redirect to={`/users/${props.searchValue}/`}/>
    }

    return (
        <div className={style.initialWrapper}>
            <img src={SearchLarge}/>
            <div className={style.contentText}>
                Start with searching
                a GitHub user
            </div>
        </div>

    );
}
const mapStateToProps = (state) => ({
    user: state.users.user,
    searchValue: state.search.searchValue,
    isSearchedState: state.search.isSearchedState
})


export default compose(
    connect(mapStateToProps,{getUserProfileInfo, isSearched}),
    withRouter
)(InitialPage)
