import httpservice from './htttpservice';
import {eventBus} from '../main'
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
        return httpservice.postNote('notes/archiveNotes',archiveData)
    },

    fetchArchiveNotesList(){
        return httpservice.get('notes/getArchiveNotesList')
    },

    moveToTrash(trashData){
        alert("in user service")
        return httpservice.postNote('notes/trashNotes',trashData),
        eventBus.$emit("notelistupdate", this.noteList),
        alert("beolw retun of trash")
        // console.log(trashData)
    },

    fetchTrashNotesList(){
        return httpservice.get('notes/getTrashNotesList')
    },

    updateNotes(updateData){
        return httpservice.postNote('notes/updateNotes',updateData)
    }
}
