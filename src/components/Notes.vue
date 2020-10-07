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
      //make empty array
      UserService.fetchNotesList().then((response) => {
         response.data.data.data.forEach(element => {
          if(element.isArchived == false && element.isDeleted == false ){
            this.noteList.push(element)
          }
        });
      error=>{
       console.log("Notes Error",error)
      }
        
        console.log(this.noteList)
      });
    },
  },
  mounted() {
    this.fetchNotes();
  //    eventBus.$on("notelistupdate", () => {
  //     // this.noteId = data;
  //     this.fetchNotes();
  //     console.log(this.note.noteId)
  //   });
  //   console.log(this.noteList)
  },
  created() {
      eventBus.$on("notelistupdate", () => {
      this.noteList=[],
      this.fetchNotes();
      console.log(this.note.noteId)
    });
  },

};
</script>
<style scoped>

</style>