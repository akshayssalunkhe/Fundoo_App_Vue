<template>
    <div>
    
        <div class="takenote" @click="show=!show" v-if="show">
           <md-toolbar class="md-primary-Note">
            <div class="md-toolbar-row">
            <p class="TAN"> Take a note... </p>       
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
     <md-card-header class="Title-input">
        <div class="md-title">
            <md-field>
                <md-input v-model="Title" placeholder="Title...">                
                </md-input>
                
                <md-button class="md-icon-button">
                  <md-icon>add</md-icon>
                </md-button>
            </md-field>
          </div>
      </md-card-header>

      <md-card-content class="content-input">
       <md-field>
            <md-textarea v-model="content" placeholder="Take a Note.."></md-textarea>
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
        <md-button @click="show=!show">Close</md-button>
      </md-card-actions>
    </md-card>
</div>

    
</div>
</template>

<script>
export default {
    name:"CreateNote",
     data(){
         return{
    Title:'',
    content:'',
    show:true,
         }

    },
}
</script>
<style  scoped>
.takenote{
    margin-right: 30%;
    margin-left: 30%;
}
.NoteCard{
    background-color:white;
    flex: 1 1 500px;
    box-sizing: border-box;
    border-radius: 3%;
    max-width: 500px;
    min-width: 500px;
    margin-left: 20%;
    margin-right: 30%;
    margin-left: 30%;
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