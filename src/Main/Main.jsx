import { Outlet } from "react-router-dom";
import Home from "../component/Home/Home";
import Header from "../component/Header";


const Main = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Main;