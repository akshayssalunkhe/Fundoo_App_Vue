import httpservice from './htttpservice';

export default {
    name:'fundooService',
    getLogin(loginData) {
        return httpservice.post(loginData)
    },
}
