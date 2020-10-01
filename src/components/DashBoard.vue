<template>
<div>

<div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary" md-elevation="0">
        <md-button class="md-icon-button" @click="toggleMenu" >
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">
              <img src="../assets/Images/keep1.png" /> Fundoo
        </span>
       <div class="md-toolbar-section-end">
          <md-button class="md-icon-button">
            <md-avatar>
              <img src="../assets/Images/keep1.png" alt="Avatar">
           </md-avatar>
          </md-button>
      </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" 
       md-permanent="clipped"
       md-persistent="mini">   
       <md-list>
         <md-list-item @click= "routing('notes')">
           <NotesIcon></NotesIcon>
            <span class="md-list-item-text">Notes</span>
          </md-list-item>

          <md-list-item>
            <ReminderIcon></ReminderIcon>
            <span class="md-list-item-text">Reminders</span>
          </md-list-item>

          <md-list-item>
            <EditIcon></EditIcon>
            <span class="md-list-item-text">Edit Lables</span>
          </md-list-item>
       
          <md-list-item @click= "routing('archive')">
            <ArchiveIcon></ArchiveIcon>
            <span class="md-list-item-text">Archive</span>
          </md-list-item>
          
          <md-list-item @click= "routing('trash')">
            <DeleteIcon></DeleteIcon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>
        </md-list>

       </md-app-drawer>
     
      <md-app-content>                 
         <router-view></router-view>
      </md-app-content>
    </md-app>
  </div>

</div>
</template>

<script>
import EditIcon from './Icons/EditIcon'
import ReminderIcon from './Icons/ReminderIcon'
import NotesIcon from './Icons/NotesIcon'
import DeleteIcon from './Icons/DeleteIcon'
import ArchiveIcon from './Icons/ArchiveIcon'

export default {
  name: 'DashBoard',
    data: () => ({
      menuVisible: false
    }),
    components: {
   ArchiveIcon,
   DeleteIcon,
   EditIcon,
   ReminderIcon,
   NotesIcon,
  },
    methods: {
      toggleMenu () {
        this.menuVisible = !this.menuVisible
      },
      routing :function (route) {
        this.$router.push("/dashboard/"+(route));
      }
    }
  }
</script>

<style  scoped>

.md-primary-Note{
width: 50%;
margin-left: 20%;
padding:0.5%;
}

.md-overlay{
  background: none;
}
.md-list-item:hover{

 background-color: whitesmoke;
 border-top-right-radius: 20px ;
 border-bottom-right-radius: 20px ;

}
.md-app-toolbar {
  border:1px solid rgb(230, 228, 228);

}
.md-drawer.md-persistent-mini.md-left {
    border-right:none;
}
.person{
  margin-left:10%;
}
.md-title {

  margin-right: 20% !important;
}

.search-bar {
  position: relative;
}
.search-bar input {
  padding-left: 30px;
}
.md-app {
    min-height: 350px;
    border: 1px solid rgba(#000, .12);
  }
.md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>
