import Repository from "./Repository/Repository";
import ReactPaginate from 'react-paginate';
import {useEffect, useState} from "react";
import paginatorStyle from './ReactPaginate.module.css'
import style from './UserRepos.module.css'

function UserRepos(props) {
    /*    const [repos, setRepos] = useState(props.repos)

        useEffect(() => {

            setRepos(props.repos)
        },[props.repos]);*/

    let reposByDate = props.repos.sort((r, i) => new Date(i.created_at).getTime() - new Date(r.created_at).getTime())
    console.log(reposByDate)

    return (
        <div>
            <div className={style.userReposWrapper}>
                Repositories({props.totalReposCount})
            </div>
            {props.repos
                ?
                reposByDate.map(r =>
                    <Repository key={r.id}
                                repos={r}
                    />
                )
                :
                'Loading...'
            }
            <ReactPaginate
                pageCount={Math.ceil(props.totalReposCount / props.perPage)}
                pageRangeDisplayed={2}
                marginPagesDisplayed={1}
                onPageChange = {props.onPageChanged}
                initialPage = {props.currentPage}
                containerClassName={paginatorStyle.paginatorContainer}
                pageClassName = {paginatorStyle.paginatorItem}
                breakClassName = {paginatorStyle.paginatorBreak}
                previousClassName={paginatorStyle.paginatorPrevious}
                nextClassName={paginatorStyle.paginatorNext}


                forcePage={null}
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                activeClassName={paginatorStyle.paginatorItemActive}
            />

            {/*<Repository {...props}/>*/}
        </div>
    );
}


export default UserRepos

