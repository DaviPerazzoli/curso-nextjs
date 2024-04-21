import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Home: React.FC = () => {

  const router = useRouter();

  const handleClick = (): void => {
    console.log('Placing your order');
    // router.push('/product');
    router.replace('/product');
  }
  return( 
    <div>
      <h1>Home Page</h1>
      <Link href="/blog">
        Blog
      </Link>
      <br/>
      <Link href='/product'>Products</Link>
      <br/>
      <button onClick={handleClick}>
        Place Order
      </button>
    </div>
    )
}

export default Home;