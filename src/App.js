import style from './App.module.css';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import InitialPage from "./component/InitialPage/InitialPage";
import store from "./redux/store"
import HeaderContainer from "./component/Header/HeaderContainer";
import React from "react";
import UsersContainer from "./component/Users/UsersContainer";

window.store = store;

function App() {

    return (
        <BrowserRouter>
            <div className={style.appContainer}>
                <div className={style.appWrapper}>
                    <HeaderContainer/>
                    <div className={style.appWrapperContent}>
                        <Switch>
                            <Route exact path='/users/:user?/'
                                   render={() => <UsersContainer/>}/>
                            <Route exact path='/'
                                   render={() => <InitialPage/>}
                            />
                        </Switch>
                    </div>

                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
