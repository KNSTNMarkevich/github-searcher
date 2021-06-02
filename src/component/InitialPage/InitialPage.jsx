import React from 'react'
import style from './InitialPage.module.css'
import SearchLarge from "../../assets/icons/SearchLarge.png";

function InitialPage (props) {

    return (
        <div className={style.initialWrapper}>
            <div className={style.initialContent}>
                <img src={SearchLarge}/>
                <div className={style.contentText}>
                    Start with searching
                    a GitHub user
                </div>
            </div>
        </div>

    );
}

export default InitialPage;

