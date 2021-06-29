<template>
<div>
    <div v-bind:key="book.bookid" v-for="book in books">
        <BookItem v-bind:book="book" v-on:add:bookitem="AddtoCart" />
    </div>
</div>
</template>

<script>
import BookItem from './BookItem.vue';

export default {
    name: "Books",
    components: {
        BookItem
    },
    props: ["books"],
    methods: {
        AddtoCart(book){
            this.$emit('add:book', book)
        }
    }
}
</script>

<style scoped>

</style>
