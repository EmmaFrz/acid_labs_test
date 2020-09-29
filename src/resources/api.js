import axios from 'axios';

const Api = {
    getAll: () => {
        let response = axios({
            baseURL:'https://graphqlzero.almansi.me/api',
            method:'post',
            data: {
                query: 'query ( $options: PageQueryOptions) { posts(options: $options) { data { id title } meta { totalCount } } }'
            }
        });
        try {
            return response;
        } catch (error) {
            return error;
        }
    },
    getPost: (id) => {
        let response = axios({
            baseURL:'https://graphqlzero.almansi.me/api',
            method:'post',
            data: {
                query: `query { post(id: ${id}) { id title body } }`
            }
        });
        try {
            return response;
        } catch (error) {
            return error;
        }
    }
}


export default Api;

