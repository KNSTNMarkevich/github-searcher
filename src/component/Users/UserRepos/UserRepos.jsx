import Repository from "./Repository/Repository";
import ReactPaginate from 'react-paginate';
import {useEffect, useState} from "react";


function UserRepos(props) {
    /*    const [repos, setRepos] = useState(props.repos)

        useEffect(() => {

            setRepos(props.repos)
        },[props.repos]);*/

    let reposByDate = props.repos.sort((r, i) => new Date(i.created_at).getTime() - new Date(r.created_at).getTime())
    console.log(reposByDate)

    return (

        <div>
            <div>
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
                forcePage={null}
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}

                containerClassName={'pagination'}
                activeClassName={'active'}
            />

            {/*<Repository {...props}/>*/}
        </div>
    );
}


export default UserRepos

