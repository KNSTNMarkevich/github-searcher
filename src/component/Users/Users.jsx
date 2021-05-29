import style from './Users.module.css'
import UserInfo from "./UserInfo/UserInfo";
import UserRepos from "./UserRepos/UserRepos";
import UserNotFound from "../common/UserNotFound/UserNotFound";
import {setIsFetching} from "../../redux/users-reducer";

function Users(props) {
    if(props.isEmptyUser){
        props.setIsFetching(false)
        return  < UserNotFound />
    }
    return (
        <div className={style.usersWrapper}>
            <div className={style.userInfoContainer}>
                <UserInfo {...props} />
            </div>
            <div className={style.userReposContainer}>
                <UserRepos {...props} />
            </div>
        </div>
    );
}

export default Users