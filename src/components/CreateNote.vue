<template>
<div>
    <TakeNote></TakeNote>
    <NoteCard></NoteCard>
</div>
</template>

<script>
import TakeNote from './TakeNote'
import NoteCard from './NoteCard'
export default {
    name:"CreateNote",
     data(){
         return{
show:true,
         }

    },
    components: {
   TakeNote,
   NoteCard
  },
}
</script>
<style  scoped>

</style>