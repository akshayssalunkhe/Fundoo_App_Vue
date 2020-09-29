<template>
<div >
 <div class="note-cards" v-for=" note in noteList " v-bind:key= "note">

    <md-card class="NoteCard">
            <md-card-header class="Title-input">
              <div class="md-title">
                <md-field>
                  <md-input placeholder="Title...">{{note.title}}</md-input>
                
                  <md-button class="md-icon-button">
                    <md-icon>add</md-icon>
                  </md-button>
                </md-field>
              </div>
            </md-card-header>

            <md-card-content class="content-input">
              <md-field>
                <md-textarea placeholder="Take a Note..">{{note.description}}</md-textarea>
              </md-field>
            </md-card-content>

              <md-card-actions>
                <md-button class="md-icon-button">
                  <md-icon>notifications</md-icon>
                </md-button>
                <md-button class="md-icon-button">
                  <md-icon>person_add</md-icon>
                </md-button>
                <md-button class="md-icon-button">
                  <md-icon>palette</md-icon>
                </md-button>
                <md-button class="md-icon-button">
                  <md-icon>panorama</md-icon>
                </md-button>
                <md-button class="md-icon-button">
                  <md-icon>archive</md-icon>
                </md-button>
                <md-button class="md-icon-button">
                  <md-icon>more_vert</md-icon>
                </md-button>
                <md-button>Close</md-button>
          </md-card-actions>
        </md-card>
      </div>
</div>
</template>

<script>
import UserService from '../services/UserService'
export default {
  name: "NoteCard",
  data() {
    return {
      noteList: [],
    };
  },
  methods: {
    fetchNotes: function () {
      UserService.fetchNotesList().then((response) => {
        this.noteList = response.data;
        console.log("fetch notes function ")
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
.NoteCard{
    background-color:white;
    flex: 1 1 500px;
    box-sizing: border-box;
    border-radius: 3%;
    max-width: 500px;
    min-width: 500px;
    margin-left: 20%;
    margin-top: 5%;
}
.md-field.md-has-textarea:not(.md-autogrow) .md-textarea {
    min-height: 100px;
    padding: 0 9px;
    resize: vertical;
}
.md-field {
    margin: 0px;
}
.Title-input,.content-input{
    border: none;
    outline: none;
    width:86%;
}
.md-card-content {
    padding: 0px;
    font-size: 14px;
    line-height: 22px;
}
.md-card-header {
    padding: 10px;
}
.md-card-actions.md-alignment-right {
    justify-content: space-around;
}
</style>