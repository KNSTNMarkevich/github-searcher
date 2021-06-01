import Repository from "./Repository/Repository";
import style from './UserRepos.module.css'
import Preloader from "../../common/Preloader/Preloader";
import EmptyRepositoryList from "../../common/EmptyRepositoryList/EmptyRepositoryList";
import Paginator from "../../common/Paginator/Paginator";

function UserRepos(props) {

    if (props.totalReposCount === 0) {
        return <EmptyRepositoryList/>
    }

    return (
        <div>
            <div className={style.userReposContainer}>
                <div className={style.userReposCount}>
                    Repositories ({props.totalReposCount})
                </div>
                <div className={style.userReposListWrapper}>
                    {props.repos
                        ?
                        props.repos.map(r =>
                            <Repository key={r.id}
                                        repos={r}
                            />
                        )
                        :
                        <Preloader/>
                    }
                    <Paginator {...props}/>
                </div>
            </div>
        </div>
    );
}


export default UserRepos