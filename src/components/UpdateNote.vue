<template>
  <div>
    <md-dialog :md-active.sync="showUpdateBox">      
    <div>   
        <md-card class="NoteCard"  v-bind:style="{ background: color }">
        <div class="Title-input">  
        <div class="md-title">
            <md-field>
                <md-input v-model="title" class="titlepc" placeholder="Title...">                
                </md-input>            
            </md-field>
          </div>
        </div>
      <md-card-content class="content-input">
       <md-field>
            <md-textarea v-model="description" placeholder="Take a Note.."></md-textarea>
          </md-field>
      </md-card-content>
      <md-card-actions>
             <md-button class="md-icon-button">
                <ColorPallete v-bind:note="noteId" ></ColorPallete>
             </md-button>
             <md-button class="md-icon-button">
               <md-icon>archive</md-icon>
             </md-button>
             <md-button class="md-icon-button">
               <md-icon>more_vert</md-icon>
             </md-button>
            <md-button @click="addNote">Close</md-button>
        </md-card-actions>
        </md-card>
    </div>
    </md-dialog>
  </div>
</template>
<script>
import UserService from '../services/UserService'
import ColorPallete from './Icons/ColorPallete'
import { eventBus } from '../main';
export default {
  name: "UpdateNote",
  props: ["showUpdateBox", "noteData"],
  data() {
    return {
      color:"",
      title: "",
      description: "",
      noteId: "",

    };
  },
   components:{
      ColorPallete
    },
  methods: {
    addNote: function () {
      const updateData = {
        noteId: this.noteId,
        title: this.title,
        description: this.description,
      };
      UserService.updateNotes(updateData).then(() => {
        this.showUpdateBox = false;
        eventBus.$emit("closeDialogBox", this.showUpdateBox);
        eventBus.$emit("notelistupdate");
      });
      error=>{
      console.log("Update Note error",error)
      }
    },
  },
  mounted() {
    this.title = this.$props.noteData.title;
    this.description = this.$props.noteData.description;
    this.noteId = this.$props.noteData.id;
    this.color=this.$props.noteData.color;

  },
   created(){
    eventBus.$on("getUpdated", (data) => {
      this.color = data;
    });
  }
  
};
</script>
<style scoped>
.md-field.md-has-textarea:not(.md-autogrow) .md-textarea {
    min-height: 40px;
    resize: vertical;
}
.titlepc{
  padding-left:15px; 
  padding-top: 10px;
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
    padding: 5px;
    padding-left: 10px;
}
.md-card-actions.md-alignment-right {
    justify-content: flex-end;
}
.md-field {
  height: 40px;
  padding-top: 0px;;
    margin: 0px;
    padding-left: 5px;
}
.md-card-content {
    padding: 0px;
    font-size: 14px;
    line-height: 22px;
}
 
.md-card{
    background-color: white;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 
    0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
    position: relative;
    z-index: 1;
    border-radius: 2px;
    transition: .3s cubic-bezier(.4,0,.2,1);
    transition-property: color,background-color;
    will-change: color,background-color;
    border-radius: 10px;
    width: 100%;
} 
.md-dialog /deep/.md-dialog-container {
  width: 40%;
  min-height: 20vh;
  border-radius: 7px;
}
.md-dialog-container{
    box-shadow: 0 11px 15px -7px rgba(0,0,0,.2),
     0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12);
    min-width: 70%;
    border-radius: 10px;
    max-width: 80%;
    max-height: 79%;
    margin: auto;
    display: flex;
    flex-flow: column;
    overflow: hidden;
    border-radius: 10px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    pointer-events: auto;
    opacity: 1;
    transform-origin: center center;
    transition: opacity .15s cubic-bezier(.25,.8,.25,1),transform .2s cubic-bezier(.25,.8,.25,1);
    will-change: opacity,transform;
}

</style>