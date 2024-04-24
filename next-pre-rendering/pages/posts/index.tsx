import { useRouter } from "next/router"

const PostList: React.FC<{ posts: PostJSON[] }> = ({ posts }) => {
    const router = useRouter();
    
    const handlePostClick = (id: number) => {
        router.push('/posts/'+id)
    }
    
    return(
    <>
        <h1>List of Posts</h1>
        {
            posts.map(post => {
                return(
                    <div key={post.id} 
                    onClick={ () => handlePostClick(post.id) }>
                        <h2>
                            {post.id} {post.title}
                        </h2>
                        <hr/>
                    </div>
                )
            })
        }
    </>
    ) 
}

export interface PostJSON {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data: PostJSON[] = await response.json();
    
    return {
        props: {
            posts: data.slice(0,3),
        },
    }
}

export default PostList;