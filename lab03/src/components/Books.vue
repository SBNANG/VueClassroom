<template>
  <div class="book">
      <div v-bind:key="book.bookid" v-for="book in books1">
        <Bookitem v-bind:book="book"/>
      </div>
  </div>
</template>

<script>
import Bookitem from './Bookitem.vue'
export default {
  name: 'Books',
  components: {
    Bookitem,
  },
  props:["books1"]
}
</script>

<style>

</style>