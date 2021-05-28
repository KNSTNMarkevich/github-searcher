import React from 'react'
import {connect} from "react-redux";
import {getUserProfileInfo} from "../../redux/users-reducer";
import {compose} from "redux";
import {withRouter} from "react-router";
import Users from "./Users";
import {getUserProfileRepos, setCurrentPage} from "../../redux/repos-reducer";

class UsersContainer extends React.Component {

/*     componentDidMount() {
        this.props.getUserProfileRepos(this.props.user.login, this.props.currentPage, this.props.perPage)
    }*/

    onPageChanged = (pageNumber) => {

        this.props.setCurrentPage(pageNumber);
        this.props.getUserProfileRepos(this.props.user.login, pageNumber, this.props.perPage)
    }

/*    componentDidUpdate(prevProps, prevState, snapshot) {
         let currentPage = this.props.currentPage
         if(prevProps.currentPage.selected !== prevState.currentPage.selected){
             this.setState({
                 currentPage: this.props.currentPage
             })
         }
    }*/

    render() {

        return (
            <>
                {this.props.isFetching ? 'Loading...' : null}
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
    currentPage: state.repos.currentPage,
    perPage: state.repos.perPage,
    totalReposCount: state.users.totalReposCount,
    isFetching: state.users.isFetching
})

export default compose(
    connect(mapStateToProps,{getUserProfileInfo, setCurrentPage, getUserProfileRepos}),
    withRouter
)(UsersContainer)

