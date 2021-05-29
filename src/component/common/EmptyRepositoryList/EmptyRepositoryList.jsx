import emptyReposListIcon from '../../../assets/icons/emptyReposListIcon.png'
import style from './EmptyRepositoryList.module.css'

let EmptyRepositoryList = (props) => {
    return (
        <div className={style.emptyReposPageContainer}>
            <div className={style.emptyReposPageContent}>
                <div>
                    <img className={style.emptyReposPageIcon} src={emptyReposListIcon}/>
                </div>
                <div className={style.emptyReposText}>
                    Repository list is empty
                </div>
            </div>

        </div>
    )
}

export default EmptyRepositoryList