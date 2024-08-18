import axios from "axios";
import { useContext, useState } from "react";
import { LuSearch } from "react-icons/lu";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../contextApi/ContextProvider";

const Navber = ({ search, setSearch, sort, setSort }) => {
    const { logOutUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSearch = async () => {
        console.log('click handle search', search)
        const res = await axios.get(`http://localhost:5000/products?search=${search}`)


        // setSearch('')
    }

    const handlePrice = (priceOrder) => {
        console.log(priceOrder)
        setSort(priceOrder)
    }

    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                navigate('/login')
            })
            .catch(e => console.log(e.message))
    }


    return (
        <div>
            <div className="navbar bg-slate-100 shadow-lg">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost text-xl mr-10">WatchWave</Link>
                    <NavLink to='/' className="mr-3">Home</NavLink>
                    <NavLink to='/register' className="mr-3">Register</NavLink>
                    <NavLink to='/login'>Log in</NavLink>
                </div>

                <div className="flex-none gap-2">
                    <div className="flex items-center">
                        <span> sort by</span>
                        <select onClick={(e) => handlePrice(e.target.value)} className="select select-bordered w-full max-w-xs">
                            <option value='new'>Newest first</option>
                            <option value='dsc'>Price low to high</option>
                            <option value='asc'>Price high to low</option>
                        </select>
                    </div>

                    <div className="form-control relative">
                        <input onChange={e => setSearch(e.target.value)} type="text" name="search" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                        <button
                            onClick={handleSearch}
                            aria-label="Search"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2"
                        >
                            <LuSearch className="text-xl" />
                        </button>

                    </div>

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">Profile</a>
                            </li>
                            <li><button onClick={handleLogOut}>Logout</button></li>
                        </ul>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Navber;