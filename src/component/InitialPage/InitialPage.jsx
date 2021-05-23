import style from './InitialPage.module.css'
import SearchLarge from "../../assets/icons/SearchLarge.png";

function InitialPage() {
    return (
        <div className={style.initialWrapper}>
            <img src={SearchLarge}/>
            <div className={style.contentText}>
                Start with searching
                a GitHub user
            </div>
        </div>

    );
}

export default InitialPage;