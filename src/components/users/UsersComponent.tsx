import React, {FC} from 'react';
import UserComponent from "@/components/user/UserComponent";

interface IProps {
    users: any[]
}

const UsersComponent: FC<IProps> = ({users}) => {
    return (
        <div>

            {
                users.map(user => <UserComponent user={user} key={user.id}/>)}
        </div>
    );
};

export default UsersComponent;
