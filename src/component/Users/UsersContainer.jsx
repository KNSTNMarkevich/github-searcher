import React from 'react'
import {connect} from "react-redux";
import {getUserProfileInfo, setIsFetching} from "../../redux/users-reducer";
import {compose} from "redux";
import Users from "./Users";
import {getUserProfileRepos, setCurrentPage} from "../../redux/repos-reducer";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {


 /*   componentDidMount() {
        this.props.getUserProfileRepos(this.props.user.login, this.props.currentPage, this.props.perPage)
    }*/

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber.selected);
        this.props.getUserProfileRepos(this.props.user.login, pageNumber.selected, this.props.perPage)
    }

/*
   componentDidUpdate(prevProps, prevState, snapshot) {
         let currentPage = this.props.currentPage
         if(prevProps.currentPage !== prevState.currentPage){
             this.setState({
                 currentPage: this.props.currentPage
             })
         }
    }
*/

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users
                    {...this.props}
                    onPageChanged = {this.onPageChanged}
                />
            </>
        )
    }
}

//Сделать нормальный контейнер!!!!!!!!!!

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
)(UsersContainer)

