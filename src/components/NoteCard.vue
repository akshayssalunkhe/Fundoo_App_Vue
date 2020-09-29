<template>

<div class="display-all-notes">
    <div class="note-cards" v-for="(note,index) in noteList" v-bind:key="index">
      <md-card @click.native="getID(note)">
        <label class="title">{{ note.title }}</label
        ><br />
        <label class="description">{{ note.description }}</label
        ><br />
        <div class="notebox-icons">
                <ArchiveIcon></ArchiveIcon>
                <ColorPallete></ColorPallete>
                <DeleteIcon></DeleteIcon>
                <MoreVertIcon></MoreVertIcon>

        </div>
      </md-card>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main";

import MoreVertIcon from './Icons/MoreVertIcon'
import DeleteIcon from './Icons/DeleteIcon'
import ColorPallete from './Icons/ColorPallete'
import ArchiveIcon from './Icons/ArchiveIcon'
import UserService from '../services/UserService'
export default {
  name: "NoteCard",
  data() {
    return {

      noteList: [],
      cartId:[],
    };
    
  },
  components:{
      ColorPallete,
      ArchiveIcon,
      DeleteIcon,
      MoreVertIcon,
    },
  methods: {
    fetchNotes: function () {
      UserService.fetchNotesList().then((response) => {
        // this.noteList = response.data.data.data;
        // console.log(this.noteList)
       response.data.data.data.forEach((element) => {
          if (element.isDeleted == false && element.isArchived == false) {
            this.noteList.push(element);
          }
        });

      });
    },
    getID: function (data) {
      this.cardId = data.id;
      eventBus.$emit("getNoteId", this.cardId);
    },
  },
  created() {
    this.fetchNotes();
    eventBus.$on("getUpdatedNoteList", (data) => {
    this.noteList = data;
    });
},
}
</script>

<style scoped>
.display-all-notes {
  justify-content: center;
  display: flex;
  margin-top: 2%;
  margin-left: 10%;
  flex-direction: row;
  max-width: 100%;
  min-width: 70%;
  flex-wrap: wrap;
}

.md-card {
  margin: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 5%;
  height: min-content;
  width: 190px;
  text-align: start;
  padding: 18px;
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