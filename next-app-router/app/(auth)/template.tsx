'use client';
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
    {name: 'Register', href: '/register'},
    {name: 'Login', href: '/login'},
    {name: 'Forgot Password', href: '/forgot-password'},
]

export default function AuthTemplate({
    children
}: {
    children: React.ReactNode
}) {
    const pathName = usePathname();
    const [input, setInput] = useState('')

    
    return (<div>
        <input value={input} onChange={e => setInput(e.target.value)}/>
        {navLinks.map( link => {
            const isActive = pathName.startsWith(link.href)
            return (<Link 
                href={link.href} 
                key={link.name} 
                className={isActive? 'bold': ''}>
                    {link.name}
                    </Link>)
        })}
        {children}
    </div>)
}