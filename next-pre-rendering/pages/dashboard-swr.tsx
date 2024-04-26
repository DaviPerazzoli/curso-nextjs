import useSWR from 'swr';
import { DashboardData }  from './dashboard';

const fetcher = async (key: string): Promise<DashboardData> => {
    const response = await fetch(key);
    const data = await response.json();
    return data;
}

function DashboardSWR() {
    const { data , error , isLoading } = useSWR('http://localhost:4000/dashboard', fetcher);
    if (error) return 'An error has occured'
    if (isLoading) return 'Loading'

    return(
        <div>
            <h2>Dashboard</h2>
            <h2>Posts - {data.posts}</h2>
            <h2>Likes - {data.likes}</h2>
            <h2>Followers - {data.followers}</h2>
            <h2>Following - {data.following}</h2>
        </div>
    )
}

export default DashboardSWR;