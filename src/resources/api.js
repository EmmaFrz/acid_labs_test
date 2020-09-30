import axios from 'axios';

const Api = {
    getImages: () => {
        try {
            let response = axios({
                baseURL:'https://api.unsplash.com/photos/?per_page=100&client_id=elALXSuC6i0MsibhhBiteyYahPnswREMuNKkOyqqhPU',
                method:'get',
            });
            return response
        } catch (error) {
            return error
        }
    },
    getAll: () => {
        try {
            let response = axios({
                baseURL:'https://graphqlzero.almansi.me/api',
                method:'post',
                data: {
                    query: 'query ( $options: PageQueryOptions) { posts(options: $options) { data { id title } meta { totalCount } } }'
                }
            });
            return response;
        } catch (error) {
            return error;
        }
    },
    getPost: (id) => {
        try {
            let response = axios({
                baseURL:'https://graphqlzero.almansi.me/api',
                method:'post',
                data: {
                    query: `query { post(id: ${id}) { id title body } }`
                }
            });
            return response;
        } catch (error) {
            return error;
        }
    },
    createPost: (input) => {
        try {
            let response = axios({
                baseURL:'https://graphqlzero.almansi.me/api',
                method:'post',
                data: {
                    query: `mutation { createPost(input: {title:"${input.title}", body:"""${input.body}"""}) { id title body } }`
                }
            });
            return response;
        } catch (error) {
            return error;
        }
    },
    deletePost: (id) => {
        try {
            let response = axios({
                baseURL:'https://graphqlzero.almansi.me/api',
                method:'post',
                data: {
                    query: `mutation { deletePost(id: ${id}) }`
                }
            });
            return response;
        } catch (error) {
            return error;
        }
    },
    updatePost: (input) => {
        try {
            let response = axios({
                baseURL:'https://graphqlzero.almansi.me/api',
                method:'post',
                data: {
                    query: `mutation{ updatePost(id: ${input.id}, input:{title:"${input.title}", body:"""${input.body}"""}) { id title body } } `
                }
            });
            return response;
        } catch (error) {
            return error;
        }
    },
}

export default Api;

