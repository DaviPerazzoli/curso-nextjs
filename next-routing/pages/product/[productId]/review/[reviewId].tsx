import { useRouter } from "next/router"

const ProductReviewWithId: React.FC = () => {
    const router = useRouter();
    const { productId , reviewId } = router.query;

    return(
        <>
            <h1>Review {reviewId} for product {productId}</h1>
        </>
    )
}

export default ProductReviewWithId;