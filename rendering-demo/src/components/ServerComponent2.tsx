import fs from 'fs'

export const ServerComponentTwo = () => {
    fs.readFileSync("src/components/ServerComponent2.tsx", "utf-8")
    
    return <h1>Server Component two</h1>
}