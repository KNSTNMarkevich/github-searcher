import logo from './logo.svg';
import style from './App.module.css';
import {BrowserRouter, HashRouter, Redirect, Route, Switch} from "react-router-dom"
import Users from "./component/Users/Users";
import InitialPage from "./component/InitialPage/InitialPage";
import store from "./redux/store"
import {Provider} from "react-redux";
import HeaderContainer from "./component/Header/HeaderContainer";
import React from "react";

window.store = store;

function App() {

    return (
        <BrowserRouter>
                <div className={style.appWrapper}>
                    <HeaderContainer/>
                    <div className={style.appWrapperContent}>
                        <Switch>
                            <Route exact path='/users/:user?/'
                                   render={() => <Users/>}/>
                            <Route exact path='/'
                                   render={() => <InitialPage/>}
                            />
                        </Switch>
                    </div>

                </div>
        </BrowserRouter>
    );
}



export default App;
