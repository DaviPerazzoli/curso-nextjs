import fs from 'fs'
import { ServerComponentTwo } from './ServerComponent2'

export const ServerComponentOne = () => {
    fs.readFileSync("src/components/ServerComponent1.tsx", "utf-8")

    return (
        <>
            <h1>Server Component one</h1>
            <ServerComponentTwo />
        </>
    )
}