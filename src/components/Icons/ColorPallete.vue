<template>
<div class="colorp">
     <md-menu md-size="medium" md-align-trigger md-direction="top-start">
      <md-icon md-menu-trigger>palette</md-icon>
       <md-menu-content >
        <div class="menu">
           <div  class="colordiv" v-for="(color,index ) in colorArray" v-bind:key="index"
            v-bind:style="{background : color.color}" @click="changeBackgroundColor(color.color)">
           </div>
        </div>
          </md-menu-content>
    </md-menu>
</div>
</template>
<script>
import { eventBus } from "../../main"
import UserService from '../../services/UserService'

export default {
    name:"ColorPallate",
   props:['note','createNote'],
    data(){
    return{
       isColorShow: false,
       noteIdList: [],
       setColor:"",
       noteId:'',
       colorArray : [
        { color: '#fff' }, { color: '#f28b82' }, { color: '#fbbc04' }, { color: '#fff475' },
        { color: '#ccff90' }, { color: '#a7ffeb' }, { color: '#cbf0f8' }, { color: '#aecbfa' },
        { color: '#d7aefb' }, { color: '#fdcfe8' }, { color: '#e6c9a8' }, { color: '#e8eaed' },
                    ],
    }
  },
  methods: {
    changeBackgroundColor: function (colorData) {
      alert("in function")
      this.setColor=colorData;
      // const data={
    //    color:this.setColor,
    //    noteIdList: [this.note],
    // };
    //   UserService.changeCardColor(data).then(() => {
    //     eventBus.$emit("notelistupdate");
    //   });
    if (this.createNote == true) {
        eventBus.$emit("getColorUpdated", colorData);
      } else { 
        eventBus.$emit("getUpdated", colorData);
        const data = {
          color: this.setColor,
          noteIdList: [this.note],
        };
        UserService.changeCardColor(data).then(() => {
          eventBus.$emit("notelistupdate");
        })
        .catch((error) => {
          console.log("Color Pallete error", error);
        });
      }
    }
  }, 
//   created() {
//     eventBus.$on("getNoteId", (data) => {
//       this.noteId = data;
//       console.log(this.note.noteId)
//     });
// },
   
}
</script>
<style scoped>
.colorp{
  padding-top: 8px;
}
.menu{
  padding: 3%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  z-index: 9999;
  background-color: white;
}
.colordiv{
  padding: 11%;
  border-radius: 50%;
  margin:1px;
  border: 1px solid grey;
}
</style>