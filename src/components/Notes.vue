<template>
<div>
    <CreateNote></CreateNote>
    <DisplayNotes v-bind:noteList="noteList"></DisplayNotes>
</div>
</template>
<script>
import { eventBus } from "../main"
import CreateNote from './CreateNote'
import DisplayNotes from './DisplayNotes'
import UserService from '../services/UserService'
export default {
    name:"Notes",
data() {
    return {
      noteList: [],
    };
    
  },
  components:{
      DisplayNotes,
      CreateNote,
    },
  methods: {
    fetchNotes: function () {
      UserService.fetchNotesList().then((response) => {
         response.data.data.data.forEach(element => {
          if(element.isArchived==false && element.isDeleted==false ){
            this.noteList.push(element)
          }
        });
        
        console.log(this.noteList)
      });
    },
  },
  mounted() {
    this.fetchNotes();
    console.log(this.noteList)
  },
  created() {
    eventBus.$on("notelistupdate", (data) => {
      this.noteId = data;
      console.log(this.note.noteId)
    });
  },

};
</script>
<style scoped>

</style>