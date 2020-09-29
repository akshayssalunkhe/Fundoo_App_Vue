<template>
<div class="takenote" @click="showNoteCard" v-if="show">
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
</template>
<script>
export default {
    name:"TakeNote",
    data(){
return{
    show:true,
      } 
},
methods:{
    showNotecard()
}

}
</script>
<style  scoped>
.takenote{
    margin-right: 30%;
    margin-left: 30%;
}

</style>