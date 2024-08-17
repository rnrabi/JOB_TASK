
import { useState } from "react";
import Navber from "../component/Navber";
import Home from "../Home";


const MainLayout = () => {
    const [search, setSearch] = useState('');
    const [sort ,setSort] = useState('')

    return (
        <div className="md:w-11/12 mx-auto">

            <Navber
                search={search}
                setSearch={setSearch}
                sort={sort}
                setSort={setSort}
            ></Navber>

            <Home
                search={search}
                sort={sort}
            ></Home>

        </div>
    );
};

export default MainLayout;