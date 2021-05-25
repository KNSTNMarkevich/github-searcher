import style from './Users.module.css'
import {connect} from "react-redux";
import {getUserProfileInfo} from "../../redux/users-reducer";
import {useEffect, useState} from "react";

function Users(props) {

  /*  let [profile, setProfile] = useState(null)
    useEffect(() => {
        setProfile(props.user)
    }, [props.user]);*/

    return (
        <div>
            <div>
                {  props.user.login }
            </div>
            <div>
                {props.user.followers}
            </div>
            <div>
                {props.user.following}
            </div>
            dasdas
        </div>
    );
}
const mapStateToProps = (state) => ({
    user: state.users.user
})

export default connect(mapStateToProps,{})(Users);
