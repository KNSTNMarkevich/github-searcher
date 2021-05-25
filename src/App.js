import logo from './logo.svg';
import style from './App.module.css';
import {BrowserRouter, Route} from "react-router-dom"
import Users from "./component/Users/Users";
import InitialPage from "./component/InitialPage/InitialPage";
import store from "./redux/store"
import {Provider} from "react-redux";
import Header from "./component/Header/HeaderContainer";
window.store = store;

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className={style.appWrapper}>
                    <Header/>
                    <div className={style.appWrapperContent}>
                        <Route path='/users/:user?'
                               render={() => <Users/>}
                        />
                        <Route path='/init'
                               render={() => <InitialPage/>}
                        />

                    </div>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
