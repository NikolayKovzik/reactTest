import { useState } from "react";
import { ProductProps } from "../models";



export function Product({ product }: ProductProps) {
    const [details, setDetails] = useState(false);
    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <img className="w-1/6" src={product.image} alt={product.title}></img>
            <p>{product.title}</p>
            <p className="font-bold">{product.price}</p>
            {!details && <button
                className="py-2 px-4 border bg-yellow-400"
                onClick={() => setDetails(true)}
            >
                Show Details
            </button>}
            {details && <button
                className="py-2 px-4 border bg-blue-400"
                onClick={() => setDetails(false)}
            >
                Hide Details
            </button>}
            {details && <div>
                <p>{product.description}</p>
            </div>}
        </div>
    )
}