<template>
    <div @click="sendToTrash()">
      <md-button class="md-icon-button">
           <md-icon>delete</md-icon>
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
  name:"Delete",
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
          if (element.isDeleted == false && element.isArchived == false) {
            this.noteList.push(element);
          }
        });
      });
    },
    sendToTrash: function () {
      alert("in send to trash");
    alert("abc ",this.$props.note.id)

      const data = {
        isDeleted:true,
        noteIdList: [this.$props.note.id],
      };
        UserService.moveToTrash(data).then(() => {
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