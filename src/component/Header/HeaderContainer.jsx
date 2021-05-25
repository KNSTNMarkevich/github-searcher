import {getUserProfileInfo} from '../../redux/users-reducer'

import {connect} from "react-redux";
import Header from "./Header";
const mapStateToProps = (state) => ({
    user: state.users.user
})
export default connect(mapStateToProps,{getUserProfileInfo})(Header);
