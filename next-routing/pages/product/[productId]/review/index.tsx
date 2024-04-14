import { useRouter } from "next/router"

const ProductReviews: React.FC = () => {
    const router = useRouter();
    const productId = Number(router.query.productId);
    return(
        <>
            <h1>Reviews for product {productId}:</h1>
            <ul>
                <li key={1}>Awesome!</li>
                <li key={2}>Horrible</li>
                <li key={3}>Cool</li>
            </ul>
        </>
    )
}

export default ProductReviews;