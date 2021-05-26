import style from './Repository.module.css'

function Repository(props) {

    return (
        <div>
            <div className={style.repositoryItem}>
                <div >
                    {props.repos.name}
                </div>
                <div>
                    {props.repos.description || 'Without Description'}
                </div>
            </div>
        </div>
    );
}


export default Repository

