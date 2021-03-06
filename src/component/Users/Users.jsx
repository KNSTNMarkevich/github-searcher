import style from './Users.module.css'
import UserInfo from "./UserInfo/UserInfo";
import UserRepos from "./UserRepos/UserRepos";
import UserNotFound from "../common/UserNotFound/UserNotFound";

function Users(props) {
    if(props.isEmptyUser){
        props.setIsFetching(false)
        return  < UserNotFound />
    }
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

export default Users