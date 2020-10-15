<template>
<div>
    <CreateNote></CreateNote>
    
     <md-progress-spinner :class="{visibility:!visibility}" md-mode="indeterminate"></md-progress-spinner>

    <DisplayNotes v-bind:noteList="filteredNoteList"></DisplayNotes>
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
      searchText:'',
      noteList: [],
      visibility:false,
    };
    
  },
  components:{
      DisplayNotes,
      CreateNote,
    },
  methods: {
    fetchNotes: function () {
      //make empty array
      this.visibility=true

      UserService.fetchNotesList().then((response) => {
         response.data.data.data.forEach(element => {
          this.visibility=false;
          if(element.isArchived == false && element.isDeleted == false ){
            this.noteList.push(element)
          }
        })
      .catch((error) => {
          console.log("Notes error", error);
        });
        
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
     eventBus.$on("search", (data) => {
      this.searchText=data;
    })
      eventBus.$on("notelistupdate", () => {
      this.noteList=[],
      this.fetchNotes();
      // console.log(this.note.noteId)
    });
  },
  computed:{
    filteredNoteList:function(){
      return this.noteList.filter((note)=>{
        return note.title.match(this.searchText);
      })
    }
  }

};
</script>
<style scoped>
.md-progress-spinner{
  margin: 10px;
}
.visibility{
  display: none;
}


</style>