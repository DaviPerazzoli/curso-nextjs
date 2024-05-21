import { ServerComponentOne } from "@/components/ServerComponent1";
import { ClientComponentOne } from "@/components/client-component-one";


export default function InterleavingPage() {
    return (
        <>
            <h1>Interleaving Page</h1>
            <ServerComponentOne />
            <ClientComponentOne />
        </>
    );
}