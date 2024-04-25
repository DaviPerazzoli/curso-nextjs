function NewsArticleList({ articles }: {articles: ArticleJSON[]}) {
    return <>
        <h1>List of News Articles</h1>
        {
            articles.map(article => {
                return (
                    <div key={article.id}>
                        <h2>
                            {article.id} {article.title} | {article.category}
                        </h2>
                    </div>
                )
            })
        }
    </>
}

export default NewsArticleList;

export interface ArticleJSON {
    id: number;
    title: string;
    description: string;
    category: string;
}
export async function getServerSideProps(){
    const response = await fetch('http://localhost:4000/news');
    const data: ArticleJSON[] = await response.json();

    console.log('Generating News List');
    return {
        props: {
            articles: data,
        },
    }
}