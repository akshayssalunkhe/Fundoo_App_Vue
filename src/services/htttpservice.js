import axios from 'axios';

// const URL = process.env.VUE_APP_PROJECT_URL

export default {

    post(path, Data) {
        return axios({
            method: 'post', 
            url: `http://fundoonotes.incubation.bridgelabz.com/api/${path}`,
            data: Data,
            // headers: {
            //     'Content-Type': 'application/json',
            //     'Authorization':localStorage.getItem('token')
            // }  
            
        })
    },

    postNote(path, Data) {
        return axios({
            method: 'post', 
            url: `http://fundoonotes.incubation.bridgelabz.com/api/${path}`,
            data: Data,
            headers: {
                'Content-Type': 'application/json',
                'Authorization':localStorage.getItem('token')
            } 
        })
    },
   
    get(path){
        return axios({
            method:'get',
            url: `http://fundoonotes.incubation.bridgelabz.com/api/${path}`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization':localStorage.getItem('token')
            } 
        })
    }
}