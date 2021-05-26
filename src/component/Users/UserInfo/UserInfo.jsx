

function UserInfo(props) {
    return (
        <div>
            <div>
                <img src={props.user.avatar_url}/>
                {props.user.login}
                {props.user.name || 'noname'}
                {props.user.followers} followers
                {props.user.following} following
            </div>
            powel nuxui
        </div>
    );
}



export default UserInfo

