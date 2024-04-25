// import useSWR from 'swr';
// import { DashboardData }  from './dashboard';

// const fetcher = async () => {
//     const response = await fetch('http://localhost:4000/dashboard');
//     const data: DashboardData = await response.json();
//     return data;
// }

// function DashboardSWR() {
//     const { data , error , isLoading } = useSWR<DashboardData>('dashboard', fetcher);

//     if (error) return 'An error has occured'
//     if (isLoading) return 'Loading'

//     return(
//         <div>
//             <h2>Dashboard</h2>
//             <h2>Posts - {data.posts}</h2>
//             <h2>Likes - {data.likes}</h2>
//             <h2>Followers - {data.followers}</h2>
//             <h2>Following - {data.following}</h2>
//         </div>
//     )
// }

// export default DashboardSWR;