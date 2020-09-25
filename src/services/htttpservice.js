import axios from 'axios';

export default {

    post(Data) {
        return axios({
            method: 'post',
            url: `http://fundoonotes.incubation.bridgelabz.com/api/user/login`,
            data: Data,
        })
    },
}