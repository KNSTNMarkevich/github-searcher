import logo from './logo.svg';
import style from './App.module.css';
import Header from './component/Header/Header'
import SearchLarge from './assets/icons/SearchLarge.png'

function App() {
  return (
    <div className={style.appWrapper}>
        <Header></Header>
        <div className={style.appWrapperContent}>
            <img src={SearchLarge}/>
            <div className={style.contentText}>
                Start with searching
                a GitHub user
            </div>
        </div>
    </div>

  );
}

export default App;
