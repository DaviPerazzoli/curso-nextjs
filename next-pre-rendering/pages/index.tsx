import Link from "next/link";

const Home: React.FC = () => {
  return <>
  <h1>Next JS pre-rendering</h1>
  <Link href="/users">Users</Link>
  </>
}

export default Home;