import Repository from "./Repository/Repository";
import {useEffect, useState} from "react";


function UserRepos(props) {
    const [repos, setRepos] = useState(props.repos)

    useEffect(() => {

        setRepos(props.repos)
    },[props.repos]);
    return (



        <div>
              <div>
                Repositories({props.repos.length})
            </div>
                   {
                props.repos.map(r =>
                    <Repository key={r.id}
                                repos={r}
                    />
                )
            }
            {/*<Repository {...props}/>*/}
        </div>
    );
}



export default UserRepos

