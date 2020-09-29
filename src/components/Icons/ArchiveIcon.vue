<template>
<div>
      <md-button class="md-icon-button" @click="sendToArchive">
           <md-icon>archive</md-icon>
       </md-button>
</div>
</template>

<script>
import { eventBus } from ".../main"
import UserService from 'C:\Vuejsprojects\fundooapp\src\services\UserService.js'
export default {
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
      const archiveData = {
        noteIdList: [this.cartId],
      };
      UserService.moveToArchive(archiveData).then(() => {
        this.fetchNotes();
        eventBus.$emit("getUpdatedNoteList", this.noteList);
      });
    },
  },
  created() {
    eventBus.$on("getNoteId", (data) => {
      this.cartId = data;
    });
  },
};
</script>

<style scoped>

</style> 