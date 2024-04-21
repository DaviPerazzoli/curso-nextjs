import React from "react";
import Link from "next/link";

const ProductList: React.FC<{productId: string | number}> = ( {productId=100} ) => {
    return(
        <>
        <Link href="/">Home</Link>
        <ul>
            <li key={1}><Link href="/product/1">Product 1</Link></li>
            <li key={2}><Link href="/product/2">Product 2</Link></li>
            <li key={3}><Link replace href="/product/3">Product 3</Link></li>
            <li key={4}><Link href={"/product/" + productId}>Product {productId}</Link></li>
        </ul>
        </>
    )
}
export default ProductList;