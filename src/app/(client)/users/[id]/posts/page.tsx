import React from 'react';
import {getPostsOfUser} from "@/services/api.service";

interface Params {
    searchParams: {
        id: string;
    }
}

const PostsPage = async ({searchParams}: Params) => {
    console.log(searchParams);
    let posts = await getPostsOfUser(+searchParams.id);
    console.log(posts);
    return (
        <div>
            {/*<PostsComponent posts={}/>*/}
        </div>
    );
};

export default PostsPage;
