import style from './Header.module.css'
import gitHub from '../../assets/icons/GitHubLogo.png'

function Header() {
    return (
        <div className={style.headerWrapper}>
            <div className={style.headerContent}>
                <img className={style.headerLogo} src={gitHub}/>
                <input className={style.searchBar} type="search"/>
            </div>

        </div>

    );
}

export default Header;