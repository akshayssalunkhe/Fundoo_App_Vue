import axios from 'axios';

// const URL = process.env.VUE_APP_PROJECT_URL

export default {

    post(login, Data) {
        return axios({
            method: 'post', 
            url: `http://fundoonotes.incubation.bridgelabz.com/api/${login}`,
            data: Data,
        })
    },
}