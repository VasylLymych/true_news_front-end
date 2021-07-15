import loadingGif from '../loading.gif'
import s from './../components/content.style/Content.module.css'

const Preloader = props => {
    return props.isFetching ? <img className={s.content_wrapper} src={loadingGif} alt="loading"/> : props.children
}
export default Preloader