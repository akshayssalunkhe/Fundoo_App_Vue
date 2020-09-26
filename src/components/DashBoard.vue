<template>
<div>

<div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary" md-elevation="0">
        <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">
              <img src="../assets/Images/keep1.png" /> Fundoo
        </span>
        <!-- <md-input
            class="search"
            v-model="searchResult"
            :md-options="noteList"
            md-layout="box"
          >
          </md-input> -->

      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" md-persistent="mini">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span>Navigation</span>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>
        <md-list>
         <md-list-item>
            <md-icon on-hover="iconhover">add</md-icon>
            <span class="md-list-item-text">Notes</span>
          </md-list-item>

          <md-list-item>
            <md-icon>archive</md-icon>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item>
            <md-icon>S</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>

      </md-app-drawer>
      <md-app-content>
                THIS IS DASH BOARD
      </md-app-content>
    </md-app>
  </div>

</div>
</template>

<script>
export default {
  name: 'DashBoard',
    data: () => ({
      menuVisible: false
    }),
    methods: {
      toggleMenu () {
        this.menuVisible = !this.menuVisible
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
.md-list-item:hover{

 background-color: whitesmoke;
 border-top-right-radius: 20px ;
 border-bottom-right-radius: 20px ;

}
.md-toolbar {
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
.search-icon {
  position: absolute;
  top: 8px;
  left: 8px;
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
