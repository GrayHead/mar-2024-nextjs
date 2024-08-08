import React, {FC} from 'react';
import Link from "next/link";

interface IProps {
    user: any
}

const UserComponent: FC<IProps> = ({user}) => {
    return (
        <div>

            <Link href={{pathname: '/users/' + user.id, query: {data: JSON.stringify(user)}}}>{user.username}</Link>
        </div>
    );
};

export default UserComponent;
