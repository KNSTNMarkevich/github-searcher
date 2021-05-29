import Repository from "./Repository/Repository";
import ReactPaginate from 'react-paginate';
import {useEffect, useState} from "react";
import paginatorStyle from './ReactPaginate.module.css'
import style from './UserRepos.module.css'
import Preloader from "../../common/Preloader/Preloader";

function UserRepos(props) {
    /*    const [repos, setRepos] = useState(props.repos)

        useEffect(() => {

            setRepos(props.repos)
        },[props.repos]);*/

    let reposByDate = props.repos.sort((r, i) => new Date(i.created_at).getTime() - new Date(r.created_at).getTime())
    console.log(reposByDate)

    return (
        <div className={style.userReposContainer}>
            <div className={style.userReposCount}>
                Repositories ({props.totalReposCount})
            </div>
            <div className={style.userReposListWrapper}>
                {props.repos
                    ?
                    reposByDate.map(r =>
                        <Repository key={r.id}
                                    repos={r}
                        />
                    )
                    :
                    <Preloader />
                }
                <div className={style.paginator}>
                    <div className={paginatorStyle.paginatorDescription}>
                        {props.firstListItem} - {props.lastListItem} of {props.totalReposCount} items
                    </div>
                    <ReactPaginate
                        pageCount={Math.ceil(props.totalReposCount / props.perPage)}
                        pageRangeDisplayed={2}
                        marginPagesDisplayed={1}
                        onPageChange={props.onPageChanged}
                        initialPage={props.currentPage}
                        containerClassName={paginatorStyle.paginatorContainer}
                        pageClassName={paginatorStyle.paginatorItem}
                        breakClassName={paginatorStyle.paginatorBreak}
                        previousClassName={paginatorStyle.paginatorPrevious}
                        nextClassName={paginatorStyle.paginatorNext}
                        activeClassName={paginatorStyle.paginatorItemActive}


                        forcePage={null}
                        previousLabel={'<'}
                        nextLabel={'>'}
                        breakLabel={'...'}
                        breakClassName={paginatorStyle.break}
                    />
                </div>
            </div>
        </div>
    );
}


export default UserRepos

