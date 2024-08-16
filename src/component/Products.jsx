import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const Products = () => {
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const {data} = await axios('http://localhost:5000/products');
            return data;
        }
    })
    console.log(products)
    return (
        <div>
            This is products
        </div>
    );
};

export default Products;