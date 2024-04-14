import React from "react";
import Link from "next/link";

const ProductList: React.FC = () => {
    return(
        <>
        <Link href="/">Home</Link>
        <ul>
            <li key={1}>Product 1</li>
            <li key={2}>Product 2</li>
            <li key={3}>Product 3</li>
        </ul>
        </>
    )
}
export default ProductList;