


const Products = ({ product }) => {
    console.log(product)
    const { _id, BrandName, Category, Description, Price, ProductCreationDate, ProductImage, ProductName, Ratings } = product;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img className="w-full h-60"
                        src={ProductImage}
                        alt="Shoes" />
                </figure>

                <div className="card-body p-1">
                    <h2 className="card-title">
                        {ProductName}
                        <div className="badge badge-secondary">{Category}</div>
                    </h2>
                    <h3>{ProductCreationDate} price: ${Price}</h3>
                    <p>{Description}</p>
                    <div className="card-actions justify-start">
                        <div>Rating: {Ratings}</div>
                        <div>Brand: {BrandName}</div>
                    </div>
                    <button className="btn font-semibold">View Product</button>
                </div>

            </div>
        </div>
    );
};

export default Products;