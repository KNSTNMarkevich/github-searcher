import style from './UsersInfo.module.css'
import followingIcon from '../../../assets/icons/userFollowingIcon.png'
import followersIcon from '../../../assets/icons/userFollowersIcon.png'
import followersTransform from "../../../utils/followersTransform";

function UserInfo(props) {
    return (
        <div>
            <div className={style.UserInfoWrapper}>
                <div>
                    <img className={style.userAvatar} src={props.user.avatar_url}/>
                </div>
                <div className={style.userName}>
                    {props.user.name || null}
                </div>
                <div className={style.userLogin}>
                    <a className={style.userLogin} href={`/${props.user.url}`}>{props.user.login}</a>
                </div>
                <div className={style.userSubscribesInfo}>
                    <img className={style.followersIcon} src={followersIcon} alt=""/>
                    <div className={style.userFollowers}>
                        {followersTransform(props.user.followers) + 'k'} followers
                    </div>
                    <img className={style.followingIcon} src={followingIcon} alt=""/>
                    <div className={style.userFollowers}>
                        {props.user.following} following
                    </div>
                </div>
            </div>
        </div>
    );
}


export default UserInfo

