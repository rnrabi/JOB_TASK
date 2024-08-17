import { MdOutlineArrowRight } from "react-icons/md";
import Products from "./component/Products";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const Home = () => {
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const { data } = await axios('http://localhost:5000/products');
            return data;
        }
    })
    console.log(products)

    return (
        <div className="md:flex gap-3 min-h-screen">

            <div className="md:w-1/6 border-r-2">
                <span>Brand Name</span>
                <select className="select select-ghost w-full max-w-xs mb-4">
                    <option disabled selected>Pick the best JS framework</option>
                    <option>Svelte</option>
                    <option>Vue</option>
                    <option>React</option>
                </select>

                <span>Category Name</span>
                <select className="select select-ghost w-full max-w-xs mb-4">
                    <option disabled selected>Pick the best JS framework</option>
                    <option>Svelte</option>
                    <option>Vue</option>
                    <option>React</option>
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
                        ></Products>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Home;