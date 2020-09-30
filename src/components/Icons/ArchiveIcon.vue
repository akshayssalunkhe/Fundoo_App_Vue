<template>
<div @click="sendToArchive()">
      <md-button class="md-icon-button">
           <md-icon>archive</md-icon>
       </md-button>
</div>
</template>

<script>
import { eventBus } from "../../main"
import UserService from '../../services/UserService'
export default {
  props:[
'note.noteId'
  ],
 name: "ArchiveIcon",
  data() {
    return {
      cartId: [],
      noteList: [],
    };
  },
  methods: {
    fetchNotes: function () {
      UserService.fetchNotesList().then((response) => {
        response.data.data.data.forEach((element) => {
          if ( element.isArchived == false) {
            this.noteList.push(element);
          }
        });
      });
    },
    sendToArchive: function () {
      alert("in send to archive");
      const data = {
        isArchived:true,
        noteIdList: [this.note.noteId],
      };
      alert("going to user service")
      UserService.moveToArchive(data).then(() => {
        alert("return from http")
        this.fetchNotes();
        //  eventBus.$emit("getUpdatedNoteList", this.noteList);
      });
    },
  },
  created() {
    eventBus.$on("getNoteId", (data) => {
      this.noteId = data;
      console.log(this.note.noteId)
    });
  },
};
</script>

<style scoped>

</style> 