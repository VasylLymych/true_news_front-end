import Preloader from "../components/preloader/Preloader";

const IsLoading = props => {
    return props.isFetching ? <Preloader/> : props.children
}

export default IsLoading