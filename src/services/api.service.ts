export const getAllUsers = async (): Promise<any[]> => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());
    return response
}


export const getPostsOfUser = async (id: number) => {
    let postsOfUser = await fetch('https://jsonplaceholder.typicode.com/users/' + id + '/posts')
        .then(value => value.json());
    return postsOfUser;


}
