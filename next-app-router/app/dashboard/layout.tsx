import Login from "../(auth)/login/page";

export default function DashboardLayout({
    children,
    user,
    revenue,
    notifications,
    login
}: {
    children: React.ReactNode,
    user: React.ReactNode,
    revenue: React.ReactNode,
    notifications: React.ReactNode,
    login: React.ReactNode
}) {
    const isLoggedIn = false;
    return isLoggedIn ? (
        <>
        <div>{children}</div>
        <div style={{display: "flex"}}>
            
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div>{user}</div>
                <div>{revenue}</div>
            </div>
            <div style={{display: 'flex', flex: 1}}>{notifications}</div>
        </div>
        </>
    ) : (login)
}