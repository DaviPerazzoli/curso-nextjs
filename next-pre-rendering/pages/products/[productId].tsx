// import { useRouter } from "next/router";
import { ProductJSON } from "./index";

const Product: React.FC<{product: ProductJSON}> = ({ product }) => {
    // const router = useRouter();

    // if(router.isFallback){
    //     return <h1>Loading...</h1>
    // }

    return (<>
        <h1>{product.id} {product.title} {product.price}</h1>
        <p>{product.description}</p>
    </>)
}

export async function getStaticPaths() {

    // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    // const data: PostJSON[] = await response.json();

   

    // const paths = data.map(post => {
    //     return {
    //         params: {
    //             postId: post.id.toString()
    //         }
    //     }
    // })
    
    return {
        paths: [
            {
                params: { productId: '1' }
            },
        ],
        // paths,
        fallback: 'blocking'
    }
}

export async function getStaticProps( context: {params: {productId: string}} ) {
    const { params } = context;

    const response = await fetch(
        `http://localhost:4000/products/${params.productId}`
    );
    const data: ProductJSON = await response.json();

    if (!data.id) {
        return {
            notFound: true
        }
    }

    console.log('Generating page for /products/'+params.productId);

    return {
        props: {
            product: data,
        }
    }
}

export default Product;