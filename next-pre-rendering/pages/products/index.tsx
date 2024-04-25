import { useRouter } from "next/router"

const ProductList: React.FC<{ products: ProductJSON[] }> = ({ products }) => {
    const router = useRouter();
    
    const handleProductClick = (id: number) => {
        router.push('/products/'+id)
    }
    
    return(
    <>
        <h1>List of products</h1>
        {
            products.map(product => {
                return(
                    <div key={product.id} 
                    onClick={ () => handleProductClick(product.id) }>
                        <h2>
                            {product.id} {product.title} {product.price}
                        </h2>
                        <hr/>
                    </div>
                )
            })
        }
    </>
    ) 
}

export interface ProductJSON {
    id: number;
    price: number;
    title: string;
    description: string;
}

export async function getStaticProps(){
    console.log('Generating / Regenerating ProductList');

    const response = await fetch('http://localhost:4000/products');
    const data: ProductJSON[] = await response.json();
    
    return {
        props: {
            products: data,
        },
        revalidate: 10
    }
}

export default ProductList;