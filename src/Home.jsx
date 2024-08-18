import { MdOutlineArrowRight } from "react-icons/md";
import Products from "./component/Products";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";


const Home = ({ search, sort }) => {
    const [brandName, setBrandName] = useState('')
    const [category, setCategory] = useState('')
    const [minPrice, setMinPrice] = useState(null)
    const [maxPrice, setMaxPrice] = useState(null)
   
    const { data: products = [] } = useQuery({
        queryKey: ['products', search, sort, brandName, category, minPrice, maxPrice],
        queryFn: async () => {
            const { data } = await axios.get(`https://job-task-server-eight-gold.vercel.app/products?search=${search}&sort=${sort}&brandName=${brandName}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}`);
            return data;
        }
    })
    // console.log(products)
   
    const handleBrandName = (brandName) => {
        // console.log(brandName)
        setBrandName(brandName)
    }

    const handleCategory = (category) => {
        // console.log(category)
        setCategory(category)
    }

    const handlePriceRange = (e) => {
        e.preventDefault()
        const minPrice = e.target.minPrice.value;
        const maxPrice = e.target.maxPrice.value;
        // console.log(minPrice, maxPrice)
        setMinPrice(minPrice);
        setMaxPrice(maxPrice);
    }

   

    return (
        <>
            <div className="md:flex gap-3 min-h-screen mt-4">

                <div className="md:w-1/6 border-r-2">
                    <span>Brand Name</span>
                    <select onClick={(e) => handleBrandName(e.target.value)} className="select select-ghost w-full max-w-xs mb-4">
                        <option>PrimeTech</option>
                        <option>NextGen</option>
                        <option>GizmoWorks</option>
                        <option>Innova</option>
                        <option>TechCo</option>
                    </select>

                    <span>Category Name</span>
                    <select onClick={(e) => handleCategory(e.target.value)} className="select select-ghost w-full max-w-xs mb-4">
                        <option>Watches</option>
                        <option>phone</option>
                        <option>other2</option>
                        <option>other3</option>
                    </select>

                    <span>Price Range</span>
                    <div>
                        <form onSubmit={handlePriceRange} className="flex items-center gap-1">
                            <input
                                type="number"
                                name="minPrice"
                                placeholder="min"
                                className="border border-slate-200 w-1/3" />
                            <span>to</span>
                            <input
                                type="number"
                                name="maxPrice"
                                placeholder="max"
                                className="border border-slate-200 w-1/3" />

                            <button>
                                <MdOutlineArrowRight className="text-xl"></MdOutlineArrowRight>
                            </button>
                        </form>
                    </div>
                </div>

                <div className="flex-1">
                    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {
                            products?.map(product => <Products
                                key={product._id}
                                product={product}
                            ></Products>)
                        }
                    </div>

                </div>

            </div>

            {/* pagination */}
            <div className="flex justify-center space-x-1 dark:text-gray-800 my-6">
                <button 
                // onClick={() => handlePage(currentPage - 1)}
                //     disabled={currentPage === 1}
                    title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-50 dark:border-gray-100">
                    <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>

                {
                    // pages?.map(page => <button key={page} onClick={() => handlePage(page)} title="Page 1" className={` ${currentPage === page ? 'bg-blue-500' : ''} inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-gray-50 dark:text-violet-600 dark:border-violet-600`}>{page}</button>)
                }



                <button 
                // onClick={() => handlePage(currentPage + 1)}
                //     disabled={currentPage === pageNumber}
                    title="next" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-50 dark:border-gray-100">
                    <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
            </div>
        </>

    );
};

export default Home;