import {getUserProfileInfo} from '../../redux/users-reducer'
import {connect} from "react-redux";
import Header from "./Header";
import {isSearched, SetSearchValue} from "../../redux/search-reducer";
import {compose} from "redux";
import {withRouter} from "react-router";

const mapStateToProps = (state) => ({
    user: state.users.user,
    searchValue: state.search.searchValue
})

export default compose(
    connect(mapStateToProps,{getUserProfileInfo, SetSearchValue, isSearched}),
    withRouter
)(Header)

