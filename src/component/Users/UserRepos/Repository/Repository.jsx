import style from './Repository.module.css'
import descriptionLength from "../../../../utils/descriptionCheck";

function Repository(props) {

    return (
        <div className={style.repositoryWrapper}>
            <div className={style.repositoryItem}>
                <div>
                    <a className={style.repositoryName} target="_blank" href={`${props.repos.html_url}`}>{props.repos.name}</a>
                </div>
                <div className={style.repositoryDescription}>
                    {props.repos.description === null ? null : descriptionLength(props.repos.description)  }
                </div>
            </div>
        </div>
    );
}


export default Repository

