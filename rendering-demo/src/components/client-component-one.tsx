"use client";

import { useState } from "react";
import { ClientComponentTwo } from "./client-component-two";

export const ClientComponentOne = () => {

    const [name, setName] = useState('');
    return (
        <>
            <h1>Client component one</h1>
            <ClientComponentTwo />
        </>
    )
}