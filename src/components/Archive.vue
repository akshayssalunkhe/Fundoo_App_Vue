<template>
  <div class="archive-main flex-properties">
    <DisplayNotes v-bind:noteList="archiveList"></DisplayNotes>
  </div>
</template>
<script>
import DisplayNotes from '../components/DisplayNotes'
import UserService from "../services/UserService";
export default {
  name: "Archive",
  data() {
    return {
      archiveList: [],
    };
  },
  components:{
      DisplayNotes,
  },
  
  methods: {
    fetchArchiveList: function () {
      UserService.fetchArchiveNotesList().then((response) => {
        this.archiveList = response.data.data.data;
        console.log(this.archiveList)
        alert("Archive fetchnotesList")
      });
      error=>{
      console.log("Archive Notes Error",error)
      }
    },
  },
  created() {
    this.fetchArchiveList();
  },
};
</script>
<style scoped>
.flex-properties {
  display: flex;
  flex-direction: row;
}
</style>