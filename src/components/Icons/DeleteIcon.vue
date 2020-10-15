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
        })
        .catch((error) => {
          console.log("fetch Nots error", error);
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
        // this.responseData = response.data;
        this.fetchNotes();
        alert("above trash emit")
        eventBus.$emit("notelistupdate", this.noteList);
      })
       .catch((error) => {
          console.log("trash error", error);
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