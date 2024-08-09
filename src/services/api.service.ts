export const getAllUsers = async (): Promise<any[]> => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users', {
        // cache: 'no-store',
        next: {
            revalidate: 60 * 60 * 24
        }
    })
        .then(value => value.json());
    return response
}


export const getPostsOfUser = async (id: number) => {
    let postsOfUser = await fetch('https://jsonplaceholder.typicode.com/users/' + id + '/posts')
        .then(value => value.json());
    return postsOfUser;
}
