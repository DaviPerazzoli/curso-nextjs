import { Http2ServerRequest, Http2ServerResponse } from "http2";
import { ArticleJSON } from ".";

interface ArticleListByCategoryProps {
    articles: ArticleJSON[],
    category: string
}

function ArticleListByCategory({ articles, category }: ArticleListByCategoryProps) {

    if (articles.length === 0) {
        return <h1>There is not article with the category {category}</h1>
    }
    
    return <>
    <h1>{category} Articles</h1>
        {
            articles.map(article => {
                return (
                    <div key={article.id}>
                        <h2>
                            {article.id} {article.title}
                        </h2>
                        <p>{article.description}</p>
                    </div>
                )
            })
        }
    </>
}

export default ArticleListByCategory;

interface SSG_Context {params: { category: string }, req: Http2ServerRequest, res: Http2ServerResponse, query: { category: string }} 

export async function getServerSideProps( context : SSG_Context) {
    const {params} = context;
    // console.log(req.headers.cookie);
    // res.setHeader('Set-Cookie', ['name=Vishwas']);

    // console.log(query);

    const response = await fetch(`http://localhost:4000/news?category=${params.category}`);
    const data: ArticleJSON[] = await response.json();

    console.log(`Pre-rendering News Articles for category ${params.category}`)

    return {
        props: {
            articles: data,
            category: params.category
        }
    }
}