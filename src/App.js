import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Routes from "./routes/Routes";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <Routes/>
        </div>
    )
}
export default App;
