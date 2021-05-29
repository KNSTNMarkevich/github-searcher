import preloader from '../../../assets/animations/Preloader.svg'
import style from './Preloader.module.css'

let Preloader = (props) => {
    return (
        <img className={style.preloader} src={preloader}/>
    )
}

export default Preloader