import React, {FC} from 'react';
import Link from "next/link";


interface IProps {
    searchParams?: {
        data?: string,

    };
}

const UserPage: FC<IProps> = ({searchParams}) => {
    let user;
    if (searchParams && searchParams.data) {
        user = JSON.parse(searchParams.data);
        console.log(user, '!!!!');
    }
    return (
        <div>

            <div>{user.email}</div>
            <button><Link href={{
                pathname: '/users/' + user.id + '/posts',
                query: {id: user.id}
            }}>posts of user</Link>
            </button>


        </div>
    );
};

export default UserPage;
