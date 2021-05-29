import style from './Repository.module.css'

function Repository(props) {

    const desctiptionCheck = (text) => {
         if (text.length >= 100){
            return text.substring(0,99) + '...'
        } else {
            return text
        }
    }

    return (
        <div className={style.repositoryWrapper}>
            <div className={style.repositoryItem}>
                <div>
                    <a className={style.repositoryName} href="">{props.repos.name}</a>
                </div>
                <div className={style.repositoryDescription}>
                    {props.repos.description === null ? 'withouttext' : desctiptionCheck(props.repos.description)  }
                </div>
            </div>
        </div>
    );
}


export default Repository

