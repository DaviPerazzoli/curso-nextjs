import { Product } from "@/components/Product";
import { Reviews } from '@/components/Reviews';
import { Suspense } from "react";

export default function ProductDetailPage() {
    return (
        <div>
            <h1>Product Detail Page</h1>
            <Suspense fallback={<p>Loading product details...</p>}>
                <Product />
            </Suspense>
            <Suspense fallback={<p>Loading product reviews...</p>}>
                <Reviews />
            </Suspense>
        </div>
    )
}