import style from './Users.module.css'
import {connect} from "react-redux";
import {getUserProfileInfo} from "../../redux/users-reducer";
import {useEffect, useState} from "react";
import {compose} from "redux";
import {withRouter} from "react-router";

function Users(props) {


    return (
        <div className={style.usersWrapper}>
            <div>
                {props.user.login}
            </div>
            powel nuxui
        </div>
    );
}



const mapStateToProps = (state) => ({
    user: state.users.user,
    searchValue: state.search.searchValue
})

export default compose(
    connect(mapStateToProps,{getUserProfileInfo}),
    withRouter
)(Users)

