import axios from 'axios'


export function GetRecommend (data) {
    return axios.get('/',data)
}

