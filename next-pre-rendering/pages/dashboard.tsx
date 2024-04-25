import { useState, useEffect } from "react";

interface DashboardData {
    posts: number;
    likes: number;
    followers: number;
    following: number;
}

function Dashboard() {
    const [isLoading, setisLoading] = useState<boolean>(true);
    const [dashboardData, setDashboardData] = useState<DashboardData>(
        {
            posts: 0,
            likes: 0,
            followers: 0,
            following: 0
        }
    );

    useEffect(() => {
        async function fetchDashboardData() {
            const response = await fetch('http://localhost:4000/dashboard');
            const data = await response.json();
            setDashboardData(data);
            setisLoading(false);
        }

        fetchDashboardData();
    }, []);

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <h2>Dashboard</h2>
            <h2>Posts - {dashboardData.posts}</h2>
            <h2>Likes - {dashboardData.likes}</h2>
            <h2>Followers - {dashboardData.followers}</h2>
            <h2>Following - {dashboardData.following}</h2>
        </div>
    )
}

export default Dashboard;