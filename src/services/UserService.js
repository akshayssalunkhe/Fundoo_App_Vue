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
    },

    moveToArchive(archiveData){
        alert("in user service")
        return httpservice.postNote('notes/archiveNotes',archiveData),
        
        console.log(archiveData)
    },

    fetchArchiveNotesList(){
        return httpservice.get('notes/getArchiveNotesList')
    },
    fetchTrashNotesList(){
        return httpservice.get('notes/getTrashNotesList')
    }
}
