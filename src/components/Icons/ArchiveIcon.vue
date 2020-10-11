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
      archive:true,
    };
  },
  methods: {
    // fetchNotes: function () {
    //   UserService.fetchNotesList().then((response) => {
    //     response.data.data.data.forEach((element) => {
    //       if ( element.isArchived == false) {
    //         this.noteList.push(element);
    //       }
    //       // eventBus.$emit("notelistupdate", this.noteList);
    //     });
    //   });
    // },
    sendToArchive: function () {
      alert("in send to archive");
      const data = {
        isArchived:true,
        noteIdList: [this.$props.note.id],
      };
        UserService.moveToArchive(data).then((response) => {
      this.responseData = response.data;
      // alert("above emmit")
      eventBus.$emit("notelistupdate")
      // alert("below emit")
      // console.log("return from user service")
      });
      
      eventBus.$emit("isArchived",this.archive)

      error=>{
      console.log("Archive Notes Error",error)
      }
     
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