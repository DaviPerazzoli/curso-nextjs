import './styles.css';

export default function PhotoFeedLayout({children, modal}: 
    {children: React.ReactNode, 
        modal: React.ReactNode}
) {
    return (
    <main>
        {modal}
        {children}
    </main>
    )
}
