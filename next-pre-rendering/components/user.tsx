import {UserJSON} from '../pages/users'; 


const User: React.FC<{user: UserJSON}> = ({ user }) => {
    return <>
        <p>{user.name}</p>
        <p>{user.email}</p>
    </>
}

export default User;