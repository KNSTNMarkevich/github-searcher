import logo from './logo.svg';
import style from './App.module.css';
import Header from './component/Header/Header'
import {BrowserRouter, Route} from "react-router-dom"
import Users from "./component/Users/Users";
import InitialPage from "./component/InitialPage/InitialPage";
import store from "./redux/store"
import {Provider} from "react-redux";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className={style.appWrapper}>
                    <Header/>
                    <div className={style.appWrapperContent}>
                        <Route path='/users/'
                               render={() => <Users/>}
                        />
                        <Route path='/init/'
                               render={() => <InitialPage/>}
                        />

                    </div>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
