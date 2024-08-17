
import { useState } from "react";
import Navber from "../component/Navber";
import Home from "../Home";


const MainLayout = () => {
    const [search, setSearch] = useState('')

    return (
        <div className="md:w-11/12 mx-auto">

            <Navber
                search={search}
                setSearch={setSearch}
            ></Navber>

            <Home
                search={search}
            ></Home>

        </div>
    );
};

export default MainLayout;