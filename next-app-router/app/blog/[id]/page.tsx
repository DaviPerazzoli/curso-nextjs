export default function BlogPost({params}: {
    params: {id: string}
}) {
    return <h1>Blog post number {params.id}</h1>
}