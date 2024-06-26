import { useRouter } from "next/router";

const ProductDetail: React.FC = () => {
    const router = useRouter();
    const productId: number = Number(router.query.productId)
    return <h1>Details about Product {productId}</h1>
}

export default ProductDetail;