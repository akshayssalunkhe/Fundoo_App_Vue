<template>
    <div>
        <div class="takenote" @click="show=!show" v-if="show">
           <md-toolbar class="md-primary-Note">
            <div class="md-toolbar-row">
            <p class="Tan"> Take a note... </p>       
             <div class="md-toolbar-section-end">
            <md-button class="md-icon-button">
               <md-icon>view_list</md-icon>
            </md-button>
            <md-button class="md-icon-button">
                <md-icon>panorama</md-icon>
            </md-button>
            </div>
        </div>            
            </md-toolbar>
        </div>

    <div >
   
    <md-card class="NoteCard" v-if=!show>
    <div class="Title-input">  
     <div class="md-title">
            <md-field>
                <md-input v-model="title" placeholder="Title...">                
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
                <md-icon>palette</md-icon>
             </md-button>
             <md-button class="md-icon-button">
               <md-icon>archive</md-icon>
             </md-button>
             <md-button class="md-icon-button">
               <md-icon>more_vert</md-icon>
             </md-button>
            <md-button @click="addNote()">Close</md-button>
      </md-card-actions>
    </md-card>
</div>
</div>
</template>

<script>
import ColorPallete from './Icons/ColorPallete'
import ArchiveIcon from './Icons/ArchiveIcon'
import MoreVertIcon from './Icons/MoreVertIcon'
import UserService from "../services/UserService";

export default {
    name:"CreateNote",
     data(){
         return{
    title:'',
    description:'',
    show:true,
    components:{
        ColorPallete,
        ArchiveIcon,
        MoreVertIcon
    }
   }
       },
    methods:{
    
    addNote: function () {
      this.show=!this.show;
      const note = {
        title: this.title,
        description: this.description,
      };
      UserService.addNote(note).then((response) => {
        this.responseData = response.data;
        this.title = "";
        this.description = "";
        this.userId="";
      });
    },
},
   created() {
    if (localStorage.getItem("token") == undefined) {
      this.$router.push("/login");
    }
  }
}
</script>
<style  scoped>
.takenote{
    margin-right: 30%;
    margin-left: 30%;
}
.NoteCard{
  height: 140px;
    background-color:white;
    flex: 1 1 500px;
    box-sizing: border-box;
    border-radius: 3%;
    max-width: 500px;
    min-width: 300px;
    margin-right: 30%;
    margin-left: 30%;
}
.md-field.md-has-textarea:not(.md-autogrow) .md-textarea {
    min-height: 40px;
    resize: vertical;
}
.md-field {
  height: 40px;
  padding-top: 0px;;
    margin: 0px;
    padding-left: 5px;
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
    justify-content: space-around;
}
</style>