import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Content from "./components/content/Content.container";

function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <Content/>
        </div>
    );
}

export default App;
