import axios from 'axios';
axios.interceptors.request.use(config => {
    let token = sessionStorage.getItem('token')
    if (token) {
        config.headers.common['token'] = JSON.parse(token)
    }
    return config
}, error => {
    return Promise.reject(error)
});
axios.interceptors.response.use(function(response) {
    if(response.data.code === 401){
        alert('登录失效，请重新登录')
        sessionStorage.removeItem('token');
        // router.replace({
        //     path:'/Login'
        // })
    }
    return response;
}, function(error) {
    return Promise.reject(error);
});

let baseUrl='http://127.0.0.1:8824'


 /**
 * 登录请求
 * @param baseUrl
 * @param params
 * @returns {res.data}
 */
export const requestLogin = params => { return axios.post(`${baseUrl}/login`, params).then(res => res.data); }; //登录接口 