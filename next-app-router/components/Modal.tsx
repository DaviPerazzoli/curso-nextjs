export default function Modal ({children}:
    {children: React.ReactNode}
) {
    return <div className="modal-background">
        <div className="modal-wrapper">
            {children}
        </div>
    </div>
}