import React from 'react';
import {getAllUsers} from "@/services/api.service";

const PostsPage = async () => {

    let users = await getAllUsers();
    console.log(users);

    return (
        <div>
            posts page
        </div>
    );
};

export default PostsPage;
