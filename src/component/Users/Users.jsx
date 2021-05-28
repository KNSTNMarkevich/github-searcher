import style from './Users.module.css'
import UserInfo from "./UserInfo/UserInfo";
import UserRepos from "./UserRepos/UserRepos";

function Users(props) {
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