<template>
<div>

<div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary" md-elevation="0">
         <div class="md-toolbar-section-start">

            <md-button class="md-icon-button" @click="toggleMenu" >
              <md-icon>menu</md-icon>
            </md-button>
        
            <span class="md-title">
              <img src="../assets/Images/keep1.png" /> Fundoo
            </span>

            <!-- <input class="search" 
            v-model="searchText"
            v-bind:md-options="options"
            placeholder="search..."> -->

         </div>
          
          <input class="search" v-model="searchText" v-bind:md-options="options" placeholder="search...">

        
       <div class="md-toolbar-section-end">
            <md-button @click="list" class="md-icon-button menubtn list-view">
                <md-icon>view_list</md-icon>
            </md-button>
        
          <md-menu md-direction="bottom-end" md-size="medium" md-align-trigger>
              <md-button md-menu-trigger>
                  <md-icon>person</md-icon>
              </md-button>
              <div class="menu-content">
                 <md-menu-content>
                   <div class="profile">
                     <div class="userimg">
                         <img src="../assets/Images/keep1.png" />
                      </div>
                      <div class="username">
                         <p>{{this.firstName}} </p>
                      </div>
                      <div class="useremail">
                         <p> {{this.email}}</p>
                       </div>
                      <div>
                         <md-button class="signoutbtn" @click="signout">Sign-out</md-button>
                      </div>
                   </div>
                </md-menu-content>
              </div> 
          </md-menu>
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
import { eventBus } from '../main';

export default {
  name: 'DashBoard',
  showSidepanel:false,
    data: () => ({
            listView: false,
      menuVisible: false,
       firstName: "",
      email: "",
      searchText:"",
      options:[],

    }),
    components: {
   ArchiveIcon,
   DeleteIcon,
   EditIcon,
   ReminderIcon,
   NotesIcon,
  },
    methods: {
       list: function () {
      if (this.listView == false) {
        this.listView = true;
      } else {
        this.listView = false;
      }
      eventBus.$emit("listView",this.listView);
    },
      toggleMenu () {
        this.menuVisible = !this.menuVisible
      },
      imageClick() {
    this.userLogin = !this.userLogin;
    alert('in image click')
      },
      routing :function (route) {
        this.$router.push("/dashboard/"+(route));
      },
       signout: function () {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("email");
      this.$router.push("/login");
    },
    },
     watch: {
    searchText: function () {
      eventBus.$emit("search", this.searchText);
    },
  },
    created() {
    this.firstName = localStorage.getItem("username");

    this.email = localStorage.getItem("email");
  },

  }
</script>

<style  scoped>
 .search { 
   max-width: 100%;
  display: flex;
  flex-direction: row;
  background-color:whitesmoke;
  border: none;
  border-radius: 15px;
  padding-right: 15%;
  padding-left: 2%;
  padding-top:1%;
  padding-bottom:1%;
  font-size :15px;

  }
  /* .search[data-v-22009874] {
    max-width: 100%;
    border: none;
    padding-top: 3%;
    padding-bottom: 3%;
    padding-right: 30%;
    padding-left: 30%;
    border-radius: 13px;
    font-size: 14px;
    flex-direction: row;
    background-color: rgb(243, 240, 240) !important;
} */
.md-toolbar {
    padding: 0 16px;
    flex-flow: row;
    position: relative;
    z-index: 2;
}
.md-menu-content.md-menu-content-medium[data-v-22009874] {
    min-width: 234px;
    background-color: white;
    padding: 5px;
    position: absolute;
    top: 60px;
    left: 700px;
    will-change: top, left;
    border-radius: 10px;
}
.manu-content{
  position: absolute;
  transform: translate(400%,40%);
  z-index: 999;
}
.useremail{
  display: flex;
}
.signoutbtn {
  background-color: rgb(143, 143, 255);
  width: 40%;
}
.profile {
  background-color: white;
  width: 100%;
  padding-top: 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.md-menu-content.md-menu-content-medium {
    max-width: 210px;
}
.md-menu-content-container .md-list {
    font-size: 14px;
    background-color: white;
}
.userImage{
  padding-left: 43%;
}
.md-menu-content-container{
width: 260px;
height: 260px;
}
.md-primary-Note{
width: 50%;
margin-left: 20%;
padding:0.5%;
}

.md-overlay{
  background: none;
}
.md-list-item:hover{

 background-color: white;
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
