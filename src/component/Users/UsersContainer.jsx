import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {getUserProfileInfo, setIsFetching} from "../../redux/users-reducer";
import {withRouter} from "react-router";
import {compose} from "redux";
import Users from "./Users";
import {getUserProfileRepos, setCurrentPage} from "../../redux/repos-reducer";
import Preloader from "../common/Preloader/Preloader";

function UsersContainer(props) {

    useEffect(() => {
        let user = props.match.params.user
        if(!props.user.login){
            props.getUserProfileInfo(user)
        }
        props.getUserProfileRepos(user, 0, props.perPage)
    },[props.user.login]);

    useEffect(() => {
        let user = props.match.params.user
        if(props.user.login != user){
            props.getUserProfileInfo(user)
            props.getUserProfileRepos(user, 0, props.perPage)
        }
    },[props.match.params.user]);

    const onPageChanged = (pageNumber) => {
        let incrementPageNumber = pageNumber.selected + 1
        if (typeof (incrementPageNumber) === "string") {
            props.setCurrentPage(pageNumber.selected.selected);
            props.getUserProfileRepos(props.user.login, pageNumber.selected.selected, props.perPage)
        } else if (typeof (incrementPageNumber) === "number") {
            props.setCurrentPage(pageNumber.selected);
            props.getUserProfileRepos(props.user.login, incrementPageNumber, props.perPage)
        }
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
    isEmptyUser: state.app.isEmptyUser,
    searchValue: state.search.searchValue,
})

export default compose(
    connect(mapStateToProps,{getUserProfileInfo, setCurrentPage, getUserProfileRepos, setIsFetching}),
    withRouter
)(UsersContainer)

