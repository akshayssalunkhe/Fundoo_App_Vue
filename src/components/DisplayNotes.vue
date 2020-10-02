<template>
<div class="display-all-notes">
    <div class="note-cards" v-for="(note,index) in noteList" v-bind:key="index">
      <md-card class="md-card">      
        <label class="title">{{ note.title }}</label><br />
        <label class="description">{{ note.description }}</label><br />
        <div class="notebox-icons">
                <ArchiveIcon :note="note"></ArchiveIcon>
                <ColorPallete></ColorPallete>
                <DeleteIcon :note="note"></DeleteIcon>
              <md-button class="md-icon-button" @click="updateBoxData(note)" >
                  <md-icon>edit</md-icon>
              </md-button>

        </div>  
      </md-card>
  
    </div>
    <div v-if="showUpdateBox">
    <UpdateNote  v-bind:showUpdateBox ="showUpdateBox" v-bind:noteData="noteData">

    </UpdateNote>
    </div>
  </div>
</template>

<script>
import UpdateNote from "./UpdateNote";
import { eventBus } from "../main";
import DeleteIcon from './Icons/DeleteIcon'
import ColorPallete from './Icons/ColorPallete'
import ArchiveIcon from './Icons/ArchiveIcon'
export default {
  props:[
'noteList'
  ],
  name: "DisplayNotes",
  data(){
    return{
      show : false,
      noteData: {},
      showUpdateBox:false,

    }
  },
   
  components:{
      ColorPallete,
      ArchiveIcon,
      DeleteIcon,
      UpdateNote,
    },
    methods:{
    updateBoxData: function (note) {
      this.showUpdateBox = true;
      this.noteData = note;
    },
    },
     created() {
    eventBus.$on("closeDialogBox", (data) => { 
      this.showUpdateBox = data;
    });
  }
    
}
</script>

<style scoped>
.display-all-notes {
  justify-content: flex-start;
  display: flex;
  margin-top: 2%;
  margin-left: 10%;
  flex-direction: row;
  max-width: 100%;
  min-width: 70%;
  flex-wrap: wrap;
}
.md-card {
  box-shadow: none;
  border: 1px solid #e0e0e0;
  margin: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  height: min-content;
  width: 200px;
  text-align: start;
  padding: 10px;
}
.title {
  font-weight: bold;
  font-size: 18px;
  max-width: 90%;
  opacity: 0.6;
  cursor: text;
  margin: 0px 0px 10px 0px;
}
.description {
  font-size: 16px;
  font-weight: 500;
}
.notebox-icons {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
