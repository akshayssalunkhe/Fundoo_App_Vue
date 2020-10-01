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
  props:{
note:Object,
  },
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
        alert("abc ",this.$props.note.id)

      const data = {
        isArchived:true,
        noteIdList: [this.$props.note.id],
      };
        UserService.moveToArchive(data).then(() => {
        this.fetchNotes();
        eventBus.$emit("notelistupdate", this.noteList);
      });
    },
  },
  created() {
    eventBus.$on("getNoteId", (data) => {
      this.noteId = data;
      console.log(this.note.noteId)
    });
},
}
</script>

<style scoped>

</style> 