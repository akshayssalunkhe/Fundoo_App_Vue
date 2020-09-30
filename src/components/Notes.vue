<template>
<div>
    <CreateNote></CreateNote>
    <DisplayNotes v-bind:noteList="noteList"></DisplayNotes>
</div>
</template>
<script>
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
        this.noteList = response.data.data.data;
        console.log(this.noteList)
      });
    },
  },
  mounted() {
    this.fetchNotes();
    console.log(this.noteList)
  },
};
</script>
<style scoped>

</style>