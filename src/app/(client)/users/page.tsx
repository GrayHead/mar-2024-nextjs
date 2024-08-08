import React from 'react';
import {getAllUsers} from "@/services/api.service";
import Link from "next/link";
import UsersComponent from "@/components/users/UsersComponent";

const UsersPage = async () => {

    let allUsers = await getAllUsers();

    return (
        <div>
            <UsersComponent users={allUsers}/>
        </div>
    );
};

export default UsersPage;
