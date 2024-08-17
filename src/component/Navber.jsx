import axios from "axios";
import { useState } from "react";
import { LuSearch } from "react-icons/lu";

const Navber = ({search , setSearch }) => {


    const handleSearch = async () => {
        console.log('click handle search', search)
        const res = await axios.get(`http://localhost:5000/products?search=${search}`)


        // setSearch('')
    }


    return (
        <div>
            <div className="navbar bg-slate-100 shadow-lg">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Logo</a>
                </div>

                <div className="flex-none gap-2">
                    <div className="flex items-center">
                        <span> sort by</span>
                        <select className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Newest first</option>
                            <option>Price low to high</option>
                            <option>Price high to low</option>
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

                        {/* <LuSearch onClick={handleSearch} className="absolute right-2 top-1/3 text-xl"></LuSearch> */}
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
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Navber;