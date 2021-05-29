import userNotFoundIcon from '../../../assets/icons/UserNotFound.png'
import style from './UserNotFound.module.css'

let UserNotFound = (props) => {
    return (
        <div className={style.notFoundPageContainer}>
            <div className={style.notFoundPageContent}>
                <div>
                    <img className={style.notFoundPageIcon} src={userNotFoundIcon}/>
                </div>
                <div className={style.notFoundText}>
                    User not found
                </div>
            </div>

        </div>
    )
}

export default UserNotFound