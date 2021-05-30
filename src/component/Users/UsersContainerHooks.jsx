import React from 'react'
import {connect} from "react-redux";
import {getUserProfileInfo, setIsFetching} from "../../redux/users-reducer";
import {compose} from "redux";
import Users from "./Users";
import {getUserProfileRepos, setCurrentPage} from "../../redux/repos-reducer";
import Preloader from "../common/Preloader/Preloader";

function UsersContainerHooks(props) {


    const onPageChanged = (pageNumber) => {
        props.setCurrentPage(pageNumber.selected);
        props.getUserProfileRepos(props.user.login, pageNumber.selected, props.perPage)
    }

    return (
        <>
            {props.isFetching ? <Preloader/> : null}
            <Users
                {...props}
                onPageChanged={onPageChanged}
            />
        </>
    )
}


const mapStateToProps = (state) => ({
    user: state.users.user,
    repos: state.repos.repos,
    currentPage: state.repos.selected.selected,
    perPage: state.repos.perPage,
    totalReposCount: state.users.totalReposCount,
    isFetching: state.users.isFetching,
    firstListItem: state.repos.firstListItem,
    lastListItem: state.repos.lastListItem,
    isEmptyUser: state.app.isEmptyUser
})

export default compose(
    connect(mapStateToProps,{getUserProfileInfo, setCurrentPage, getUserProfileRepos, setIsFetching})
)(UsersContainerHooks)

