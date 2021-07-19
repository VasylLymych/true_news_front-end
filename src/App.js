import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Routes from "./routes/Routes";
import Notification from "./components/notification/Notification";

const App = props => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <Routes/>
            {props.notification ? <Notification category={props.category}/> : null}
        </div>
    )
}
export default App;
