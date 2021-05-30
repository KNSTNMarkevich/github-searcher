import Repository from "./Repository/Repository";
import ReactPaginate from 'react-paginate';
import paginatorStyle from './ReactPaginate.module.css'
import style from './UserRepos.module.css'
import Preloader from "../../common/Preloader/Preloader";
import EmptyRepositoryList from "../../common/EmptyRepositoryList/EmptyRepositoryList";

function UserRepos(props) {
    if (props.totalReposCount === 0) {
        return <EmptyRepositoryList />
    }

    console.log(props.selected)

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
                        <Preloader />
                    }
                    <div className={style.paginator}>
                        <div className={paginatorStyle.paginatorDescription}>
                            {(props.firstListItem)+4} - {(props.lastListItem)+4} of {props.totalReposCount} items
                        </div>
                        <ReactPaginate
                            pageCount={Math.ceil(props.totalReposCount / props.perPage)}
                            pageRangeDisplayed={2}
                            marginPagesDisplayed={1}
                            onPageChange={props.onPageChanged}
                            initialPage={0}
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
        </div>
    );
}


export default UserRepos

