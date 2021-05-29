import style from './Repository.module.css'

function Repository(props) {

    const descriptionCheck = (text) => {
         if (text.length >= 50){
            return text.substring(0,99) + '...'
        } else {
            return text
        }
    }

    return (
        <div className={style.repositoryWrapper}>
            <div className={style.repositoryItem}>
                <div>
                    <a className={style.repositoryName} target="_blank" href={`${props.repos.html_url}`}>{props.repos.name}</a>
                </div>
                <div className={style.repositoryDescription}>
                    {props.repos.description === null ? null : descriptionCheck(props.repos.description)  }
                </div>
            </div>
        </div>
    );
}


export default Repository

