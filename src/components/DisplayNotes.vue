<template>
<div class="display-all-notes">
    <div class="note-cards" v-for="(note,index) in noteList" v-bind:key="index">
      <md-card>
        <label class="title">{{ note.title }}</label><br />
        <label class="description">{{ note.description }}</label><br />
        <div class="notebox-icons">
                <ArchiveIcon :note="note"></ArchiveIcon>
                <ColorPallete></ColorPallete>
                <DeleteIcon></DeleteIcon>
                <MoreVertIcon></MoreVertIcon>

        </div>
      </md-card>
    </div>
  </div>
</template>

<script>
import MoreVertIcon from './Icons/MoreVertIcon'
import DeleteIcon from './Icons/DeleteIcon'
import ColorPallete from './Icons/ColorPallete'
import ArchiveIcon from './Icons/ArchiveIcon'
export default {
  props:[
'noteList'
  ],
  name: "DisplayNotes",

  components:{
      ColorPallete,
      ArchiveIcon,
      DeleteIcon,
      MoreVertIcon,
    },
}
</script>

<style scoped>
.display-all-notes {
  justify-content: space-around;
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
