import { MdOutlineArrowRight } from "react-icons/md";

const Home = () => {
    return (
        <div className="grid grid-cols-6 gap-2 min-h-screen">

            <div className="grid-cols-2 border-r-2">
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

            <div className="grid-cols-4">
                product
            </div>
        </div>
    );
};

export default Home;