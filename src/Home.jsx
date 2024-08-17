import { MdOutlineArrowRight } from "react-icons/md";
import Products from "./component/Products";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";


const Home = ({ search, sort }) => {
    const [brandName, setBrandName] = useState('')
    const [category, setCategory] = useState('')

    const { data: products = [] } = useQuery({
        queryKey: ['products', search, sort, brandName, category],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:5000/products?search=${search}&sort=${sort}&brandName=${brandName}&category=${category}`);
            return data;
        }
    })
    console.log(products)

    const handleBrandName = (brandName) => {
        console.log(brandName)
        setBrandName(brandName)
    }

    const handleCategory = (category) => {
        console.log(category)
        setCategory(category)
    }


    return (
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
                    <form className="flex items-center gap-1">
                        <input
                            type="number"
                            placeholder="min"
                            className="border border-slate-200 w-1/3" />
                        <span>to</span>
                        <input
                            type="number"
                            placeholder="max"
                            className="border border-slate-200 w-1/3" />

                        <MdOutlineArrowRight className="text-xl"></MdOutlineArrowRight>
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
    );
};

export default Home;