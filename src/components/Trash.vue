<template>
  <div class="archive-main flex-properties">
    <DisplayNotes v-bind:noteList="trashList"></DisplayNotes>
  </div>
</template>
<script>
import DisplayNotes from '../components/DisplayNotes'
import UserService from "../services/UserService";
export default {
  name: "Trash",
  data() {
    return {
      trashList: [],
    };
  },
  components:{
      DisplayNotes,
  },
  
  methods: {
    fetchTrashList: function () {
      UserService.fetchTrashNotesList().then((response) => {
        this.trashList = response.data.data.data;
        console.log(this.trashList)
        alert("Trash fetchnotesList")
      });
      error=>{
      console.log("Trash Note error",error)
      }
    },
  },
  created() {
    this.fetchTrashList();
  },
};
</script>
<style scoped>
.flex-properties {
  display: flex;
  flex-direction: row;
}

</style>