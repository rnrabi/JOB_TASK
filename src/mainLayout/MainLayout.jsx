
import Navber from "../component/Navber";
import Home from "../Home";


const MainLayout = () => {
    return (
        <div className="md:w-11/12 mx-auto">
            <Navber></Navber>
            <Home></Home>
        </div>
    );
};

export default MainLayout;