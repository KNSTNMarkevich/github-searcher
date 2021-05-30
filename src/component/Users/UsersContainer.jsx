import React from 'react'
import {connect} from "react-redux";
import {getUserProfileInfo, setIsFetching} from "../../redux/users-reducer";
import {compose} from "redux";
import Users from "./Users";
import {getUserProfileRepos, setCurrentPage} from "../../redux/repos-reducer";
import Preloader from "../common/Preloader/Preloader";
import {withRouter} from "react-router";



class UsersContainer extends React.Component {
        componentDidMount() {
            debugger;
                    let user = this.props.match.params.user
                    if (!this.props.user.login) {
                        this.props.getUserProfileInfo(user)
                    }
            this.props.getUserProfileRepos(this.props.searchValue, this.props.selected.selected, this.props.perPage)

        }

    onPageChanged = (pageNumber) => {
        let incrementPageNumber = pageNumber.selected + 1
        if (typeof (incrementPageNumber) === "string") {
            this.props.setCurrentPage(pageNumber.selected.selected);
            this.props.getUserProfileRepos(this.props.user.login, pageNumber.selected.selected, this.props.perPage)
        } else if (typeof (incrementPageNumber) === "number") {
            this.props.setCurrentPage(pageNumber.selected);
            this.props.getUserProfileRepos(this.props.user.login, incrementPageNumber, this.props.perPage)
        }

    }



        componentDidUpdate(prevProps, prevState, snapshot) {
            if (this.props.user.login !== prevProps.user.login) {
                this.props.getUserProfileRepos(this.props.searchValue, 0, this.props.perPage)
            }

        }



    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    {...this.props}
                    onPageChanged={this.onPageChanged}
                />
            </>
        )
    }
}

//Сделать нормальный контейнер!!!!!!!!!!

const mapStateToProps = (state) => ({
    user: state.users.user,
    repos: state.repos.repos,
    selected: state.repos.selected,
    perPage: state.repos.perPage,
    totalReposCount: state.users.totalReposCount,
    isFetching: state.users.isFetching,
    firstListItem: state.repos.firstListItem,
    lastListItem: state.repos.lastListItem,
    isEmptyUser: state.app.isEmptyUser,
    searchValue: state.search.searchValue,
})

export default compose(
    connect(mapStateToProps, {getUserProfileInfo, setCurrentPage, getUserProfileRepos, setIsFetching}),
    withRouter
)(UsersContainer)

