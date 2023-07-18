import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./component/header";
import Home from "./component/home";
import About from "./component/about";
import Projects from "./component/Projects";
import Contant from "./component/Contant";
import Sidebar from "./component/sidebar";
import React from "react";

function App() {
    return (
        <div className="App">
            <Header/>
            {/*< Sidebar />*/}

            <Home/>
            <About/>
            <Projects/>
            <Contant/>
        </div>
    );
}

export default App;
