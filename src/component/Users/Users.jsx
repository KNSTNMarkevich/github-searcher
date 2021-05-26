import style from './Users.module.css'
import {connect} from "react-redux";
import {getUserProfileInfo} from "../../redux/users-reducer";
import {compose} from "redux";
import {withRouter} from "react-router";
import UserInfo from "./UserInfo/UserInfo";
import UserRepos from "./UserRepos/UserRepos";

function Users(props) {
    return (
        <div className={style.usersWrapper}>
            <div>
                <UserInfo {...props} />
            </div>
            <div>
                <UserRepos {...props} />
            </div>
        </div>
    );
}


const mapStateToProps = (state) => ({
    user: state.users.user,
    searchValue: state.search.searchValue,
    repos: state.repos.repos
})

export default compose(
    connect(mapStateToProps,{getUserProfileInfo}),
    withRouter
)(Users)

