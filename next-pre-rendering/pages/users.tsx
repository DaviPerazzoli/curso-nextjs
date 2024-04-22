import User from "@/components/user";

const UserList: React.FC<{users: UserJSON[]}> = ({users}) => {
    return (
        <>
            <h1>List of Users</h1>
            {
                users.map(user => {
                    return(
                        <div key={user.id}>
                           <User user={user}/>
                        </div>
                    )
                })
            }
        </>
    )
}

export type UserJSON = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data: UserJSON[] = await response.json();

    return {
        props: {
            users: data,
        },
    }
}

export default UserList;