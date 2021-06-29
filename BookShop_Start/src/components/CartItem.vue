<template>
<div class="book-item" v-bind:class="{'is-complete':book.completed}">
    <b>{{book.title}}</b><br />
    <b>Price:</b> {{book.price}}<br />
    <b>Quantity:</b> {{book.qty}}<br />
    <div align="center">
        <button class="btn btn-success" v-on:click="IncreaseQty(book.bookid)">&nbsp;+&nbsp;</button>&nbsp;
        <button class="btn btn-info" v-on:click="DecreaseQty(book.bookid)">&nbsp;-&nbsp;</button>&nbsp;
        <button class="btn btn-danger" v-on:click="Remove(book.bookid)">&nbsp;x&nbsp;</button>
    </div>

</div>
</template>

<script>
export default {
    name: "CartItem",
    props: ["book"],
    methods: {
        IncreaseQty(bookId){
            this.$emit('increaseCartitem', bookId)
        },
        DecreaseQty(bookId){
            this.$emit('decreaseCartitem', bookId)
        },
        Remove(bookId){
            this.$emit('remove:Cartitem', bookId)
        }
    },

}
</script>

<style scoped>
.book-item {
    background: #e6f7ff;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
}
</style>
