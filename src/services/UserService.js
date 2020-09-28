import httpservice from './htttpservice';

export default {
    name:'fundooService',
    getLogin(loginData) {
        return httpservice.post(`user/login`,loginData)
    },
   
    addNote(data){
        return httpservice.postNote('notes/addNotes',data,{
            headers: {
                      'Content-Type': 'application/json',
                      'Authorization':localStorage.getItem('token')
                     } 
        })
    },

    fetchNotesList(){
        return httpservice.get('notes/getNotesList')
    }
}
